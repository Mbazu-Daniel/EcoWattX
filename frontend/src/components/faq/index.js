import FaqItem from "./faqComponent";

export default function FAQ() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full my-28">
            <div className="w-10/12">
                <h1 className="text-center mb-10 text-4xl mt-24 font-medium capitalize">Frequently asked questions</h1>
                <div className="w-full flex flex-col items-center justify-center">
                    <FaqItem
                        question="How do I apply for a campaign?"
                        answer='To apply for a campaign, simply navigate to the Campaigns page and select the campaign you are interested in. Click on the "Apply" button and complete the application form.'
                        />
                    <FaqItem
                        question="When will I get paid for a campaign?"
                        answer="The timing of payment for a campaign may vary depending on several factors, including the campaign's terms and conditions, the payment schedule set by the advertiser, and the payment processing time. Generally, payments for completed campaigns are processed within a specific timeframe agreed upon by the parties involved. It is recommended to refer to the campaign's guidelines or reach out to the campaign organizer or platform for specific information regarding payment timelines."
                        />
                    <FaqItem
                        question="What type of content can I create for a campaign?"
                        answer="When it comes to creating content for your campaign, the possibilities are vast. You have the freedom to explore various avenues and formats to engage your audience. Whether it's crafting compelling blog posts, designing captivating visuals, producing informative videos, or conducting interactive surveys, the choice is yours. You can also leverage social media platforms to share attention-grabbing posts, and consider incorporating podcasts or webinars to deliver your message effectively. Remember, the key is to align your content with your campaign goals and target audience. By being creative and authentic, you can create impactful content that resonates with your audience and drives your campaign forward."
                        />
                    <FaqItem
                        question="How can I track the performance of my campaigns?"
                        answer='You can track campaign performance through analytics tools and tracking metrics such as click-through rates, conversion rates, and engagement levels.'
                        />
                    <FaqItem
                        question="What happens if my application for a campaign is rejected?"
                        answer="If your application for a campaign is rejected, it means that your submission did not meet the criteria or requirements set by the campaign organizers. You will receive a notification or communication informing you of the rejection. Don't be discouraged, as there can be various reasons for a rejection, such as limited spots or specific preferences. Use the feedback to improve your future applications and explore other opportunities available to you."
                        />
                </div>
            </div>
        </div>
    );
}