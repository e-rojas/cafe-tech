import React from 'react';
import Card from 'react-bootstrap/Card';

const individualCard = () => {
    return (
        <Card style={{ margin: '30px', flexBasis:'auto',flexGrow:'1',minWidth:'18rem' }}>
        <img
        style={{ width: "50px",margin:'10px' }}
        className="rounded-circle img-fluid border border-dark "
        src="https://coderthemes.com/adminto/layouts/light-rtl/assets/images/users/user-1.jpg"
        alt="profile"
      />
            <Card.Body>
                <hr/>
    <Card.Title><strong>Name:</strong> </Card.Title>
    <Card.Text>
      <strong>Email:</strong>
    </Card.Text>
   
  </Card.Body>
</Card>
    );
}

export default individualCard;
