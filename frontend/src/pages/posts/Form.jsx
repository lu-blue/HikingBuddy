import React from "react";
import {
  Button,
  Form,
  Grid,
  Segment,
  Container,
  Image,
} from "semantic-ui-react";
import ImgUpload from "./ImgUpload";

export default function PostForm({ onSubmit, post }) {
  const [postLocation, setPostLocation] = React.useState("");
  const [body, setBody] = React.useState("");
  const [postDistance, setPostDistance] = React.useState("");
  const [postImageUrl, setImageUrl] = React.useState("");

  const change = ({ target: { value } }) => {
    setImageUrl(value);
  };

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({
      postLocation: postLocation,
      body: body,
      postDistance: postDistance,
      imageUrl: postImageUrl,
    });

    // Clear the input field
    setPostLocation("");
    setBody("");
    setPostDistance("");
  };

  return (
    <Container>
      <Grid.Column only="widescreen" widescreen={10}>
        <Segment style={{ background: "#d6fbe0" }}>
          <h2 style={{ color: "#e9896a" }}>
            Enjoyed a hike? Share and recommend!
          </h2>
          {/* <h4 className="card-title">Make a new post</h4> */}
          <Form inverted size>
            <Form.Group widths="equal">
              <Form.Field>
                <label style={{ color: "#e9896a" }}>Location/Trail name</label>
                <Form.Input
                  fluid
                  placeholder="Håga Trail"
                  value={postLocation}
                  onChange={(e) => setPostLocation(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label style={{ color: "#e9896a" }}>Distance in km</label>
                <Form.Input
                  placeholder="35"
                  value={postDistance}
                  onChange={(e) => setPostDistance(e.target.value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label style={{ color: "#e9896a" }}>Recommended hiking</label>
              <Form.Input
                fluid
                placeholder="I recommend because..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label style={{ color: "#e9896a" }}>Upload image or video</label>
              <Image src={postImageUrl} />
              <ImgUpload className="profile" uploadImg={change} />
            </Form.Field>

            <Button
              as="a"
              inverted
              color="blue"
              onClick={handleSubmit}
              type="submit"
            >
              Post
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Container>
  );
}
