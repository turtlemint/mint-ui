import * as React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./index";
import { StoryWrapper } from "../storybook.setup";

const stories = storiesOf("Card", module);

stories.add("default", () => {
    return (
        <StoryWrapper>
            <Card>
                <Card.Header>
                    Header
                </Card.Header>
                <Card.Body>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quaerat eaque, rerum reiciendis, voluptatibus est in aliquam officiis excepturi doloremque placeat deserunt suscipit architecto sed animi fugiat voluptas, aliquid accusantium. Harum odio neque non, perferendis maxime a quis eveniet quidem similique vitae assumenda id vero aut saepe consectetur. Accusamus porro optio totam qui quisquam, sint error ut veniam officiis eveniet nemo iste quod exercitationem placeat esse dolor odio nobis aliquam ipsam tempora voluptate mollitia dignissimos velit repellendus? Quae, est reiciendis. Eos eligendi, animi nostrum accusantium quasi harum quo atque sed quos at dolorem veritatis sit laborum temporibus similique quod incidunt!
               </Card.Body>
            </Card>
        </StoryWrapper>
    )
});