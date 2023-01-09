import { Card } from "semantic-ui-react";

function Home() {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Agency Analytics</Card.Header>
      </Card.Content>
      <Card.Content>
        <p>Dear Hiring Manager,</p>
        <p>
          I just wanted to take a moment to thank you for your consideration for
          a full stack developer position at Agency Analytics. Thank you!
        </p>
        <p>
          I know that many applicants are provided with this challenge, and my
          hope with this challenge in particular I'm able to provide you not
          only with the proof that I can write applications using PHP, but also
          using other languages and frameworks.
        </p>
        <p>
          This particular application was written using not only PHP but also
          making use of Laravel. Laravel is a great framework that I've been
          using almost full time for the past 4 years.
        </p>
        <p>
          While I've had the opportunity to use many other frameworks in not
          only PHP but also languages like nodejs and python, I've always found
          that laravel almost always lends itself best to writing projects in a
          quick and structured manner.
        </p>
        <p>
          The frontend of this application is written using Javascript with
          React and Semantic UI. The frontend also makes use of libraries like
          axios, React Router, and lodash
        </p>
        <p>
          To use the application please click "Crawler" in the menu bar on the
          left
        </p>
        <p>
          If you have any questions or would like to contact me, feel free to do
          so at 780-851-7551 or email me at tyson_tlo@live.ca
        </p>
        <p>Thank you again for your consideration!</p>
      </Card.Content>
    </Card>
  );
}

export default Home;
