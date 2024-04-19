import { spinUpServer } from "../../apis/emailApis"
import Discover from "./Discover"
import Hero from "./Hero"
import Popular from "./Popular"
import Whyus from "./Whyus"
import { useEffect } from "react"

const Landing = () => {

    useEffect(() => {
        spinUpServer()
    }, [])
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