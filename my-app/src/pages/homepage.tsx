import { Card } from "../components/Card/Card" 

function helloWorld(){
    console.log('Hello World')
}
export default function HomePage() {
  return (
    <div className="Card-Container">
      <Card title="test123" text="Hello world this is my cv how can i help you " onClick={helloWorld} />
    </div>
  )
}