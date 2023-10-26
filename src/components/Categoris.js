import React, { Component } from 'react'

export class Categoris extends Component {
   constructor(props) {
      super(props)
      this.state = {
         categories: [
            {
               key: 'all',
               name: 'Всё'
            }, {
               key: 'chairs',
               name: 'Стулья'
            }, {
               key: 'tables',
               name: 'Столы'
            }, {
               key: 'sofa',
               name: 'Диваны'
            }, {
               key: 'light',
               name: 'Свет'
            },
         ]
      }
   }

   render() {
      return (
         <div className='categoris'>
            {this.state.categories.map(el => (
               <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}> {el.name}</div>
            ))
            }
         </div>
      )
   }
}

export default Categoris