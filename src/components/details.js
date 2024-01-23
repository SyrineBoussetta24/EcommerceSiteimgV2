import React from "react";
import { useProductView } from "./useProductView";
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  FormGroup,
  CardSubtitle,
} from "reactstrap";

const ProductView = () => {
  const {
    product,
    getImage,
    selectedColor,
    selectedSize,
    selectedQuantity,
    setSelectedColor,
    setSelectedSize,
    handleQuantityChange,
  } = useProductView();
  
  const { attributes } = product;



  console.log("B6")

  return (
    <Card className="product-details">
      <Row>
        <Col sm="12" md="4">
          <CardImg
            left="true"
            width="100%"
            src={`http://localhost:1337`}
            alt=""
          />
        </Col>
        <Col sm="12" md="8">
          <CardBody>
            <CardTitle></CardTitle>
            <CardText></CardText>
            <CardSubtitle>
              <strong>Price:</strong>
            </CardSubtitle>
            <div>
              <CardSubtitle>Sizes:</CardSubtitle>
              <div className="sizes">
                {/*attributes.sizes.map((size) => (
                  <span
                    key={size.name}
                    className={`${selectedSize === size.name ? "active" : ""}`}
                    onClick={() => setSelectedSize(size.name)}
                  >
                    {size.name}
                  </span>
                ))*/}
              </div>
            </div>
            <div>
              <div className="colours">
                  <span
                  >
                    <img
                      src={'http://192.168.1.56:8086/static/11.png'}
                    />
                  </span>
              </div>
              <FormGroup className="quantity">
                <Label for="exampleSelect">Selected items</Label>
                <Input
                  value={selectedQuantity}
                  type="select"
                  name="quantity"
                  id="exampleSelect"
                  onChange={handleQuantityChange}
                >
                  {/*quantity.map((number) => (
                    <option key={number}>{number}</option>
                  ))*/}
                </Input>
              </FormGroup>
            </div>
            <Button color="primary">Add to basket</Button>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductView;
