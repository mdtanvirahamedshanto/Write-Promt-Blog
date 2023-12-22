
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-col flex flex-center">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-Powerd prompts</span>
        </h1>
        <p className="desc text-center">
            Promts XYZ is an open-source AI promts tool for modern world to discover, create and share creative promts
        </p>

        <Feed />
    </section>
  )
}

export default Home