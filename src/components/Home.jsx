import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Home(prop) {
    // console.log("HOME PROPS--", prop.cardData.length)

    
  return (
    <>
    {/* <Header /> */}

 <br /><br /><br /><br />

       <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://govaughn.com/wp-content/uploads/2015/07/iphone.jpg" />
      <Card.Body>
        <Card.Title>Iphone-7</Card.Title>
        <Card.Text>
        Price- $-999
        </Card.Text>
        <Button variant="primary" onClick={()=>prop.addToCartHandler({price:1000,name:"Iphone"})}>Add-To-Cart</Button>
        

      </Card.Body>
    </Card>
       </div>

    </>
  )
}
