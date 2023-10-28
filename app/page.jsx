import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Descubre y Comparte
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center max-md:ml-3">
          Chat-GPT Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Chat-GPT prompts es una herramienta donde los usuarios podran crear,compartir y descubrir diferentes Prompts. 
      </p>

      <Feed />
    </section>
  )
}

export default Home