trusted.$inject = ['$sceDelegateProvider'];

export default function trusted($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**',
    'https://www.facebook.com/**',
    'https://fburl.com/**',
    'http://cdn.playbuzz.com/**',
  ]);
}