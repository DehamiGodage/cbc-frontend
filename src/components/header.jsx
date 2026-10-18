import UserData from "./userData";

export default function Header() {
    return (
        <div className="bg-red-500">
            <h1 className="font-bold text-2xl">
                Crystal Beauty Clear
            </h1>

            <p>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit.
            </p>

        <UserData />
        </div>
    );
}