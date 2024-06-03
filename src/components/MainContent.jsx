import Item from "./Item"
import article1Picture from "../assets/img/article_1.webp"
import article2Picture from "../assets/img/article_2.jpg"


const MainContent = ()=>{
  return (
    <>
    <section className="main-content">
        <Item title="TITLE HEADING" subtitle="Title Description" picture ={article1Picture} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis cupiditate porro ipsa tenetur? Iste dicta, nulla quae excepturi facilis eligendi, officia quaerat voluptatem voluptate delectus in, corrupti consectetur ab." altPicture = "Beautifull picture of space"/>
        <Item title="TITLE HEADING" subtitle="Title Description" picture ={article2Picture} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis cupiditate porro ipsa tenetur? Iste dicta, nulla quae excepturi facilis eligendi, officia quaerat voluptatem voluptate delectus in, corrupti consectetur ab." altPicture = "Beautifull picture of space"/>
        <Item title="TITLE HEADING" subtitle="Title Description" picture ={article1Picture} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officiis cupiditate porro ipsa tenetur? Iste dicta, nulla quae excepturi facilis eligendi, officia quaerat voluptatem voluptate delectus in, corrupti consectetur ab." altPicture = "Beautifull picture of space"/>
    </section>
    </>
  )
}

export default MainContent