// eslint-disable-next-line no-unused-vars
export default function FeatureCard({ icon: Icon, title, description, image }) {
  return (
    <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
      <div className="relative rounded-t-xl overflow-hidden mb-4">
        <div className="absolute bottom-2 right-2 transform w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Icon className="text-blue-600" size={24} />
        </div>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
