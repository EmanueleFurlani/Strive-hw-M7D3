import React from "react"
import SingleSearch from "./SingleSearch"
import { Col, Container, Form, Button, Row } from "react-bootstrap";
import uniqid from "uniqid"

export default class SearchResult extends React.Component{

    state = {
        jobquery:"",
        jobs: [],
    }

    handleChange=(e)=>{
        this.setState({jobquery: e.target.value})
    }

    handleFetch=async(e)=>{
        try {
            e.preventDefault()
            let response=await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${this.state.jobquery}&limit=6`)
            let jobsData=await response.json()
            this.setState({jobs: jobsData.data})
        } catch (error) {
            return(error)
        }
    }
  
     render() {
      return (
 
          <Container>
            <Row>
              <Col>
                <Form onSubmit={this.handleFetch}>
                  <Row className="justify-content-md-center">
                    <Form.Group as={Col} controlId="formGridSearch">         
                      <Form.Control type="text" placeholder="What job are you looking for?" value={this.state.jobquery} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridButton">      
                        <Button type="search" className={"rounded-circle"} variant="outline-success">Search</Button>
                    </Form.Group>         
                  </Row>
                </Form>   
              </Col>
            </Row> 
           
            <Row>

                  {/* {this.state.jobs && this.state.jobs.map((jobData) => <SingleSearch key={uniqid()} data={jobData} />)}  */}
                  {/* with example of Stefano */}
                  {this.state?.jobs?.map((jobData) => <SingleSearch key={uniqid()} data={jobData} />)} 
            </Row>
          </Container>
        );  
    }    
}