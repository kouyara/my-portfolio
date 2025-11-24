'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmDialog(true);
  };

  const handleConfirmSend = async () => {
    setShowConfirmDialog(false);
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        setStatus('error');
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const handleCancelSend = () => {
    setShowConfirmDialog(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white-gray dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-inter-bold">
            Contact
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
            プロジェクトのご相談や一緒に開発してみたい方は、ぜひお気軽にご連絡ください！
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
            Web制作のお仕事や、技術系のアルバイト依頼などもお受けしています。
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-inter-bold">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary-blue-light)' }}
                  >
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white font-inter-bold">
                      Email
                    </h4>
                    <p className="font-semibold text-gray-600 dark:text-gray-400 text-lg">
                      kouya624694※gmail.com
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 font-inter mt-1">
                      ※マークを@マークに変更してお送りください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white-custom dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white-custom dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-colors"
                  style={{ outlineColor: 'var(--primary-blue)' }}
                  onFocus={(e) =>
                    (e.currentTarget.style.boxShadow =
                      '0 0 0 2px var(--primary-blue-light)')
                  }
                  onBlur={(e) => (e.currentTarget.style.boxShadow = '')}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white-custom dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-colors"
                  style={{ outlineColor: 'var(--primary-blue)' }}
                  onFocus={(e) =>
                    (e.currentTarget.style.boxShadow =
                      '0 0 0 2px var(--primary-blue-light)')
                  }
                  onBlur={(e) => (e.currentTarget.style.boxShadow = '')}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-inter"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white-custom dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-colors resize-none"
                  style={{ outlineColor: 'var(--primary-blue)' }}
                  onFocus={(e) =>
                    (e.currentTarget.style.boxShadow =
                      '0 0 0 2px var(--primary-blue-light)')
                  }
                  onBlur={(e) => (e.currentTarget.style.boxShadow = '')}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium bg-primary-hover transition-colors font-inter disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ boxShadow: 'none' }}
                onFocus={(e) =>
                  (e.currentTarget.style.boxShadow =
                    '0 0 0 4px var(--primary-blue-light)')
                }
                onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-center font-inter">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-center font-inter">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6 animate-fade-in">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-inter-bold">
              送信内容の確認
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 font-inter">
                  お名前
                </p>
                <p className="text-gray-900 dark:text-white font-inter">
                  {formData.name}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 font-inter">
                  メールアドレス
                </p>
                <p className="text-gray-900 dark:text-white font-inter">
                  {formData.email}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 font-inter">
                  メッセージ
                </p>
                <p className="text-gray-900 dark:text-white font-inter whitespace-pre-wrap">
                  {formData.message}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-inter">
              この内容で送信してよろしいですか？
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleCancelSend}
                className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-inter"
              >
                キャンセル
              </button>
              <button
                onClick={handleConfirmSend}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors font-inter"
              >
                送信する
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
