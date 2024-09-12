//'use client'

import Link from "next/link";

async function About(){


    await new Promise(resolve => setTimeout(() => {resolve("")}, 3000));

    // throw new Error("Created an error or testing");
    return (
        <div>
            <h2>About</h2>
            <p>This application is built using Nextjs </p>
            <nav>
                <Link href="/about/details">Details</Link>
            </nav>
        </div>
    )
}

export default About;