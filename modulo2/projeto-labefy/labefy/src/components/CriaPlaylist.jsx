import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class CriaPlaylist extends React.Component {
    state={
    }
  
    render(){
      return (
        <div>
            <input
                placeholder='Nova Playlist'
                value={this.props.novaPlay}
                onChange={this.props.updateNovaPlay}
            />
            <button
                onClick={this.props.createPlaylist}
            >Adicionar</button>
        </div>
      );
    }
  }
  
  export default CriaPlaylist;