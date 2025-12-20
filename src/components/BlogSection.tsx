'use client';

import Link from 'next/link';

const GOLD = '#A66242';

const blogPosts = [
    {
        id: 1,
        image: 'https://bespoke.ae/wp-content/uploads/2024/11/10-Reasons-Why-Bespoke-Tailors-is-the-Best-Tailor-in-Dubai.jpg',
        title: '10 Reasons Why Bespoke Tailors is the Best Tailor in Dubai',
        excerpt: "10 Reasons Why Bespoke Tailors is the Best Tailor in Dubai Amid Dubai's glittering skyline and vibrant energy, Bespoke Tailors is a [...]",
        slug: '10-reasons-why-bespoke-tailors-is-the-best-tailor-in-dubai'
    },
    {
        id: 2,
        image: 'https://bespoke.ae/wp-content/uploads/2024/11/Snapinsta.app_338458186_606354281108053_286845741021848260_n_1080.jpg',
        title: '5 Ways to Spot the Best Tailor in Dubai',
        excerpt: '5 Ways to Spot the Best Tailor in Dubai Dubai, a global hub for fashion and luxury, boasts an impressive selection of [...]',
        slug: '5-ways-to-spot-the-best-tailor-in-dubai'
    },
    {
        id: 3,
        image: 'https://bespoke.ae/wp-content/uploads/2024/11/Bespoke-Blog-4-Dubais-Tailored-Authority-Bespoke-Tailors-Where-to-Find-the-Best-Suits-in-Dubai-2.jpg',
        title: "Dubai's Tailored Authority: Where to Find the Best Suits in Dubai",
        excerpt: "Dubai's Tailored Authority: Where to Find the Best Suits in Dubai Dubai is home to some of the best suits in Dubai. [...]",
        slug: 'dubais-tailored-authority-where-to-find-the-best-suits-in-dubai'
    },
    {
        id: 4,
        image: 'https://bespoke.ae/wp-content/uploads/2024/11/From-Boardroom-to-Red-Carpet_-Best-Suits-in-Dubai-for-Every-Occasion-3.jpg',
        title: 'From Boardroom to Red Carpet: Best Suits in Dubai for Every Occasion',
        excerpt: "From Boardroom to Red Carpet: Best Suits in Dubai for Every Occasion in Dubai - a city that embodies luxury and sophistication - your wardrobe should [...]",
        slug: 'from-boardroom-to-red-carpet-best-suits-in-dubai-for-every-occasion'
    },
    {
        id: 5,
        image: 'https://bespoke.ae/wp-content/uploads/2024/10/Dubais-Red-Carpet-Ready-Bespoke-Tailors-for-Your-Favorite-Branded-Suits-in-Dubai-image-1.jpg',
        title: "Dubai's Red Carpet Ready: Bespoke Tailors for Your Favorite Branded Suits in Dubai",
        excerpt: "Dubai's Red Carpet Ready: Bespoke Tailors for Your Favorite Branded Suits in Dubai Dubai, a city synonymous with luxury, offers a breathtaking [...]",
        slug: 'dubais-red-carpet-ready-bespoke-tailors-for-your-favorite-branded-suits-in-dubai'
    },
    {
        id: 6,
        image: 'https://bespoke.ae/wp-content/uploads/2024/10/Bespoke-Best-Wedding-Suits-in-Dubai-Crafted-for-You-image-2.jpg',
        title: "Say 'I Do' in Style: Bespoke Best Wedding Suits in Dubai Crafted for You",
        excerpt: "Say 'I Do' in Style: Bespoke Best Wedding Suits in Dubai Crafted for You Your wedding day is a special occasion, a [...]",
        slug: 'say-i-do-in-style-bespoke-best-wedding-suits-in-dubai-crafted-for-you'
    }
];

export default function BlogSection() {
    return (
        <div className="min-h-screen bg-[#F5F5F5]">
            

            {/* Blog Grid */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="group">
                                {/* Image */}
                                <div className="relative h-[380px] overflow-hidden mb-4">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content - Separate from image */}
                                <div className="bg-transparent">
                                    <h2 className="font-serif text-[17px] sm:text-[19px] mb-3 leading-tight text-black">
                                        <Link href={`/blogs/${post.slug}`} className="hover:underline">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="font-serif text-[14px] sm:text-[15px] leading-relaxed" style={{ color: '#a19f99' }}>
                                        {post.excerpt}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
