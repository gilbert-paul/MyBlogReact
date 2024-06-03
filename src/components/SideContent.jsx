import Item from "./Item"
import Avatar from "../assets/img/avatar.jpg"

const SideContent = ()=>{
  return (
    <>
    <section className="side-content">
        <Item title="About me" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse exercitationem autem sapiente ratione odit tempora maiores ex. Recusandae quia iste sed incidunt quasi, hic ullam omnis consequuntur provident. Reprehenderit, consequuntur." picture={Avatar} altPicture="My Avatar" />
    </section>
    </>
  )
}

export default SideContent

