import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
    return <>
        <MainNavigation />
        <main>
            <hi>An error occurred!</hi>
            <p>Could not find this page!</p>
        </main>
    </>
}

export default ErrorPage;