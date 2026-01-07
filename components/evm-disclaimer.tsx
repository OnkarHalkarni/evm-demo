"use client"

export default function EVMDisclaimer() {
  return (
    <div className="bg-yellow-50 border-t-4 border-yellow-500 p-4 sm:p-6 text-center rounded-lg shadow-lg">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-2xl">⚠️</span>
        <p className="font-bold text-yellow-900">सूचना</p>
        <span className="text-2xl">⚠️</span>
      </div>
      <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
        हे मतदान शिक्षणासाठी तयार केलेले डेमो इलेक्ट्रॉनिक व्होटिंग मशीन (ईव्हीएम) आहे. हे{" "}
        <strong>कोणत्याही खऱ्या निवडणुकी किंवा सरकारी प्रणालीशी जोडलेले नाही.</strong> हे इंटरफेस आधुनिक मतदान मशीन कसे कार्य करतात हे मतदारांना समजून घेण्यासाठी डिझाइन केले आहे.
      </p>
    </div>
  )
}
