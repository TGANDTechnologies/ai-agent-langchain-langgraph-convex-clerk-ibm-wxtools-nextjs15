export default function WelcomeMessage() {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-10">
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-inset ring-gray-200 px-6 py-5 max-w-lg w-full">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Welcome to AI Agent Chat! 👋
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          To help me get started, please tell me about your business and provide me with:
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>A brief explination of your business, project or idea.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>The url to your website or landing page if you have one.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>Will you like to include social media within your gameplan?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>Please provide the url for your closest competitor.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">•</span>
            <span>Please explain any other elements you think are important.</span>
          </li>
        </ul>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Feel free to ask me anything! I&apos;m here to help.
        </p>
      </div>
    </div>
  );
}
