import { useEffect, useState } from "react"

import NavbarDropdownModel from "../models/NavbarDropdownModel"
import NavbarRowModel from "../models/NavbarRowModel"

const NavbarStandardTemplate = () => {
    const data = [
        {
            "textLink": "Link 1",
            "hrefLink": "link1"
        },
        {
            "textLink": "Link 2",
            "hrefLink": "link2"
        },
        {
            "textLink": "Link 3",
            "hrefLink": "link3"
        },
    ]

    const [isDesktopScreen, SetIsDesktopScreen] = useState(window.innerWidth > 768)

    useEffect(() => {
        const handleResize = () => {
            SetIsDesktopScreen(window.innerWidth > 768);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <>
            {
                isDesktopScreen ?
                    <NavbarRowModel
                        data={data}
                        logo="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                    />
                    :
                    <NavbarDropdownModel
                        data={data}
                        logo="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                        iconButtonMenu="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                    />
            }
        </>
    )
}

export default NavbarStandardTemplate