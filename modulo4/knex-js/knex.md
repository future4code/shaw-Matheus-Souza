### Exercicio 1

a) Ele devolve pra gente o resultado da query e outras informações, do mesmo jeito que o MySQL devolve as queries naturalmente.

b)
```typescript
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result[0][0]
}
```

c)
```typescript
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
          SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
};
```
### Exercicio 2

a)
```typescript
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
};
```

b)
```typescript
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
};
```

c)
```typescript
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
};
```

### Exercicio 3

a)
```typescript
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
```

b)
```typescript
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercicio 4

a)
```typescript
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
```

b)
```typescript
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```