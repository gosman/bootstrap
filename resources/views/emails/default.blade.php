@component('mail::message')
    {{$body}}
    @isset($buttonUrl)
        @component('mail::button', ['url' => $buttonUrl]) {{$buttonText ?? 'Click Here'}} @endcomponent
        {{$signoff ?? ''}}
    @endisset
@endcomponent
