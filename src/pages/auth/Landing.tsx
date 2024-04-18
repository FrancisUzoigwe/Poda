import Discover from "./Discover"
import Hero from "./Hero"
import Popular from "./Popular"
import Whyus from "./Whyus"

const Landing = () => {
    return (
        <div>
            <Hero />
            <Whyus />
            <Discover />
            <Popular />
        </div>
    )
}

export default Landing