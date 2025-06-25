/**

    It is a key to lookup for the instance of the dependency.

    CommonService = Dependency Injection Token

    constructor(private _commonService: CommonService)

    A DI token is a lookup token associated with a dependency provider in dependency injection system. The injector maintains an internal token-provider map that it references when asked for a dependency and the DI token is the key to the map. Let's take example of DI Token usage,

const BASE_URL = new InjectionToken<string>('BaseUrl');
const injector = Injector.create({providers: [{provide: BASE_URL, useValue: 'http://some-domain.com'}]});
const url = injector.get(BASE_URL);

*/