'use client'

type AboutErrorPageProps = {
    error: Error
}

export default function AboutErrorPage(props: AboutErrorPageProps){

    return (
        <div className="alert alert-danger">
            Failed to load the page
            <p>{props.error.message}</p>
        </div>
    )
}