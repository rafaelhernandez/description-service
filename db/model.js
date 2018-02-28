var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/airbnb_descriptions');


// User schema
const UserSchema = mongoose.Schema(
  {
    "first_name": String,
    "has_profile_pic": Boolean,
    "id": Number,
    "languages": Array,
    "thumbnail_url": String
  }
);

const DescriptionSchema = mongoose.Schema(
  {
    "city": String,
    "country": String,
    "id": {type: Number, unique: true},
    "name": String,
    "scrim_color": Array,
    "user": {
      "user": UserSchema
    },
    "user_id": Number,
    "address": String,
    "bathrooms": Number,
    "bedrooms": Number,
    "beds": Number,
    "cancellation_policy": String,
    "check_in_time": Number,
    "check_in_time_end": String,
    "check_in_time_ends_at": Number,
    "check_in_time_start": String,
    "check_out_time": Number,
    "country_code": String,
    "hosts": [UserSchema],
    "market": String,
    "max_nights": Number,
    "min_nights": Number,
    "neighborhood": String,
    "person_capacity": Number,
    "primary_host": UserSchema,
    "property_type": String,
    "reviews_count": Number,
    "room_type": String,
    "room_type_category": String,
    "scrim_colors": [String],
    "state": String,
    "zipcode": String,
    "bed_type": String,
    "bed_type_category": String,
    "access": String,
    "amenities": [String],
    "amenities_ids": [Number],
    "cancel_policy": Number,
    "cancel_policy_short_str": String,
    "cleaning_fee_native": Number,
    "currency_symbol_right": String,
    "description": String,
    "description_locale": String,
    "experiences_offered": String,
    "extra_user_info": String,
    "extras_price_native": Number,
    "guests_included": Number,
    "house_rules": String,
    "interaction": String,
    "is_location_exact": Boolean,
    "jurisdiction_names": [String],
    "jurisdiction_rollout_names": [String],
    "language": String,
    "listing_cleaning_fee_native": Number,
    "listing_monthly_price_native": Number,
    "listing_price_for_extra_person_native": Number,
    "listing_security_deposit_native": Number,
    "listing_weekend_price_native": Number,
    "listing_weekly_price_native": Number,
    "locale": String,
    "localized_check_in_time_window": String,
    "localized_check_out_time": String,
    "localized_city": String,
    "notes": String,
    "price_for_extra_person_native": Number,
    "property_type_id": Number,
    "public_address": String,
    "require_guest_phone_verification": Boolean,
    "requires_license": Boolean,
    "license": String,
    "security_deposit_formatted": String,
    "security_deposit_native": Number,
    "security_price_native": Number,
    "space": String,
    "square_feet": Number,
    "star_rating": Number,
    "summary": String,
    "time_zone_name": String,
    "additional_house_rules": String,
    "in_building": Boolean,
    "in_toto_area": Boolean,
    "toto_opt_in": String,
    "wireless_info": String
  }
);

var DescriptionModel = mongoose.model('description', DescriptionSchema);

function findOne(roomId) {
  return DescriptionModel
    .findOne({id: roomId})
    .lean()
    .exec();
}

// insertOne inserts a story into the db
function insertOne(description) {
  return DescriptionModel.create(description);
}

exports.insertOne = insertOne;
exports.findOne = findOne;
