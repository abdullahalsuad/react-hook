import useWindowWidth from "./hook/useWidowWidth"

export default function LayoutCopoOne() {
    const onSmall = useWindowWidth(600);


    return (
        <div>
            <h1>you arer browsing on {onSmall ? 'small' : 'large'} device</h1>
        </div>
    )
}
