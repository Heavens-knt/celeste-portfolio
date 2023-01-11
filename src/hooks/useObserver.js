import {useEffect, useState} from "react";

//intersetion stat
const [interset, setIntersert] = useState(false)
//useObserver function
const useObserver = (target, attribute, attributeName,options, setIntersert) => {
	useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
                setIntersert(entry.isIntersecting)
                if(interset) {
                    if(attribute === "id") {
                        entry.target.setAttribute("id", attributeName)
                        observer.unobserve(entry.target)
                    } else if(attribute === "class") {
                        entry.target.setAttribute("class", attributeName)
                        observer.unobserve(entry.target)
                    }
                } else {
                    return;
                }
            })
        }, options)

        observer.observe(target)
    }, [interset])
} 

export {useObserver}