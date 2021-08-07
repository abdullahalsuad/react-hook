import useWindowWidth from "./hook/useWidowWidth"

export default function LayoutCopoTwo() {
   
const onSmall = useWindowWidth(500);

    return (
        <div className={onSmall ? 'small' : 'large'}>
            <h1>another component broo</h1>
        </div>
    )
}
