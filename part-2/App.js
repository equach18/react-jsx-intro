const App = () => {
    return (
        <div>
            <Tweet
            key = "1"
            name = "Elaine"
            username = "equach18"
            date = {new Date().toDateString()}
            msg = "my first tweet!!"
             />
            <Tweet
            key = "2"
            name = "Elaine"
            username = "equach18"
            date = {new Date().toDateString()}
            msg = "my second tweet!!"
             />
            <Tweet
            key = "3"
            name = "Elaine"
            username = "equach18"
            date = {new Date().toDateString()}
            msg = "my third tweet!!"
             />
        </div>
    )
}