@extends('errors::minimal')
@section('redirect')
    <meta http-equiv="refresh" content="0;URL='/'"/>
@endsection
@section('title', __('Page Expired'))
@section('code', '419')
@section('message', __('Page Expired'))
