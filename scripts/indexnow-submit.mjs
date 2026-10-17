const INDEXNOW_HOST = 'endomatics.com';
const INDEXNOW_KEY = 'e7b93a02847c4e5185d26391df93cbf1';
const KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

const URL_LIST = [
  `https://${INDEXNOW_HOST}/`,
  `https://${INDEXNOW_HOST}/features`,
  `https://${INDEXNOW_HOST}/insights`,
  `https://${INDEXNOW_HOST}/insights/best-cloud-based-hospital-management-system-software`,
  `https://${INDEXNOW_HOST}/insights/best-medical-billing-and-coding-software-rcm`,
  `https://${INDEXNOW_HOST}/insights/eliminating-hospital-revenue-leakage-via-realtime-reconciliation`,
  `https://${INDEXNOW_HOST}/insights/optimizing-emergency-room-throughput-with-predictive-triage`,
  `https://${INDEXNOW_HOST}/insights/reducing-clinical-prescription-errors-via-automated-cross-verification`,
  `https://${INDEXNOW_HOST}/privacy`,
  `https://${INDEXNOW_HOST}/terms`,
];

async function submitIndexNow() {
  console.log(`[IndexNow] Preparing submission of ${URL_LIST.length} URLs for ${INDEXNOW_HOST}...`);

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  try {
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log(`[IndexNow] Submission completed with HTTP Status: ${res.status} (${res.statusText})`);
    if (res.status === 200 || res.status === 202) {
      console.log('[IndexNow] Success! Search engines (Bing, Yandex, Seznam, Naver) have received the URL set.');
    } else {
      const text = await res.text();
      console.warn('[IndexNow] Response details:', text);
    }
  } catch (err) {
    console.error('[IndexNow] Submission network error:', err);
  }
}

submitIndexNow();
