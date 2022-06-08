import { Request, Response } from "express"
import connection from "./connection"
import app from "./app"

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
	return result[0][0]
}

getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});
 
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error:any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0][0]
}

searchActor("Juliana Paes")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
          SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
};

countActors("male")
    .then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<void> => {
    await connection
        .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
        })
        .into("Actor");
};

const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
};

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
}; 

const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
};

avgSalary("male")
    .then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
});

app.post("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        new Date(req.body.dateOfBirth),
        req.body.gender
      );
  
      res.status(200).send("Boa filhão");
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.put("/actor", async (req: Request, res: Response) => {
    try {
      await updateActor(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
      res.status(200).send("Vai com Deus");
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });