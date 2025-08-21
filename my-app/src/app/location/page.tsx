// app/location/page.tsx
import Link from "next/link";

export const metadata = {
    title: "Location • Sympos2k25",
    description: "Periyar University location and directions",
};

export default function LocationPage() {
    const mapSrc =
        "https://www.google.com/maps?q=Periyar%20University,%20Salem,%20Tamil%20Nadu&output=embed";
    const directionsUrl =
        "https://www.google.com/maps/dir/?api=1&destination=Periyar+University,+Salem,+Tamil+Nadu";

    return (
        <div className="min-h-[calc(100vh-3rem)] p-4  w-full justify-center items-center h-auto bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex rounded">
            <div>
                <div className="mb-6 text-center">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                        Periyar University — Location
                    </h1>
                    <p className="text-white">
                        Find the venue and get directions for Sympos2k25.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">
                                    Campus Address
                                </h2>
                                <p className="mt-2 text-gray-700 leading-relaxed">
                                    Periyar University
                                    <br />
                                    Salem, Tamil Nadu
                                    <br />
                                    India
                                </p>
                            </div>

                            <div className="border-t pt-4">
                                <h3 className="font-medium text-gray-900">Landmarks</h3>
                                <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                                    <li>Near NH44 (Salem — Bengaluru Highway)</li>
                                    <li>~10–15 km from Salem Junction</li>
                                    <li>Well-connected by city buses & cabs</li>
                                </ul>
                            </div>

                            <div className="pt-2">
                                <a
                                    href={directionsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white hover:bg-indigo-700 transition"
                                >
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-md p-2">
                            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
                                <iframe
                                    title="Periyar University Map"
                                    src={mapSrc}
                                    className="h-full w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                            <div className="px-3 py-2 text-sm text-gray-500">
                                Can’t see the map?{" "}
                                <Link
                                    href={directionsUrl}
                                    target="_blank"
                                    className="text-indigo-600 hover:underline"
                                >
                                    Open directions in a new tab
                                </Link>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

