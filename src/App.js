import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categoris from './components/Categoris';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         orders: [],
         currentItems: [],
         items: [
            {
               id: 1,
               title: 'Стул черный',
               img: 'black.jpeg',
               desc: 'Lorem ipsum dolor',
               category: 'chairs',
               price: '50'
            },
            {
               id: 2,
               title: 'Стул синий',
               img: 'blue.jpeg',
               desc: 'Lorem ipsum dolor',
               category: 'chairs',
               price: '20'
            }, {
               id: 3,
               title: 'Стул зеленый',
               img: 'green.jpeg',
               desc: 'Lorem ipsum dolor',
               category: 'light',
               price: '30'
            }, {
               id: 4,
               title: 'Стол белый',
               img: '41.jpeg',
               desc: 'Lorem ipsum dolor',
               category: 'tables',
               price: '10'
            }, {
               id: 5,
               title: 'Стул зеленый',
               img: '11.jpeg',
               desc: 'Lorem ipsum dolor',
               category: 'light',
               price: '30'
            }, {
               id: 6,
               title: 'Стул белый',
               img: '31.jpg',
               desc: 'Lorem ipsum dolor',
               category: 'chairs',
               price: '77'
            }, {
               id: 7,
               title: 'Стул белый',
               img: '32.jpg',
               desc: 'Lorem ipsum dolor',
               category: 'chairs',
               price: '55'
            }, {
               id: 8,
               title: 'Диван белый',
               img: '21.jpeg',
               desc: 'Lorem ipsum dolor',
               category: 'sofa',
               price: '60'
            }, {
               id: 9,
               title: 'Диван желтый',
               img: '22.jpeg',
               desc: 'Lorem ipsum dolor',
               category: 'sofa',
               price: '60'
            }, {
               id: 10,
               title: 'Стол белый',
               img: '42.jpeg',
               desc: 'Lorem ipsum dolor',
               category: 'tables',
               price: '10'
            }, {
               id: 11,
               title: 'Лампа',
               img: '13.jpeg',
               desc: 'Lorem ipsum dolor',
               category: 'light',
               price: '33'
            }, {
               id: 12,
               title: 'Лампа',
               img: '12.jpg',
               desc: 'Lorem ipsum dolor',
               category: 'light',
               price: '33'
            },
         ],
         showFullIten: false,
         fullItem: {}
      }
      this.state.currentItems = this.state.items
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteOrder = this.deleteOrder.bind(this)
      this.chooseCategory = this.chooseCategory.bind(this)
      this.onShowItem = this.onShowItem.bind(this)

   }

   render() {
      return (
         <div className='wrapper'>
            <Header orders={this.state.orders} onDelete={this.deleteOrder} />
            <Categoris chooseCategory={this.chooseCategory} />
            <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
            {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder}
               onShowItem={this.onShowItem} item={this.state.fullItem} />}
            <Footer />
            
         </div>
      );
   }

   onShowItem(item) {
      this.setState({ fullItem: item })
      this.setState({ showFullItem: !this.state.showFullItem })
   }

   chooseCategory(category) {
      if (category === 'all') {
         this.setState({ currentItems: this.state.items })
         return
      }

      this.setState({
         currentItems: this.state.items.filter(el => el.category == category)
      })
   }

   deleteOrder(id) {
      this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
   }

   addToOrder(item) {
      let isInArray = false;
      this.state.orders.forEach(el => {
         if (el.id === item.id)
            isInArray = true;
      })
      if (!isInArray)
         this.setState({ orders: [...this.state.orders, item] })
   }
}
export default App;
