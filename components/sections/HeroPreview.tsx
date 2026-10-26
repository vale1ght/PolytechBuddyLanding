import Image from "next/image";

export default function HeroPreview() {
    return (
        <div className="lg:flex lg:flex-1 lg:justify-end">
            <div className="w-full max-w-[540px] overflow-hidden rounded-[32px]">

                <Image
                    src="/preview-light.svg"
                    width={540}
                    height={382}
                    alt="Прев'ю"
                    priority
                    className="w-full h-auto img-light"
                />

                <Image
                    src="/preview-dark.svg"
                    width={540}
                    height={382}
                    alt="Прев'ю"
                    priority
                    className="w-full h-auto img-dark"
                />

            </div>
        </div>
    );
}