# `oauthResourceServerConfigProfile` Submodule <a name="`oauthResourceServerConfigProfile` Submodule" id="@cdktn/provider-vault.oauthResourceServerConfigProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthResourceServerConfigProfile <a name="OauthResourceServerConfigProfile" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile vault_oauth_resource_server_config_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer"></a>

```python
from cdktn_provider_vault import oauth_resource_server_config_profile

oauthResourceServerConfigProfile.OauthResourceServerConfigProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  issuer_id: str,
  profile_name: str,
  audiences: typing.List[str] = None,
  clock_skew_leeway: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None,
  jwks_ca_pem: str = None,
  jwks_uri: str = None,
  jwt_type: str = None,
  namespace: str = None,
  no_default_policy: bool | IResolvable = None,
  optional_authorization_details: bool | IResolvable = None,
  public_keys: IResolvable | typing.List[OauthResourceServerConfigProfilePublicKeys] = None,
  supported_algorithms: typing.List[str] = None,
  use_jwks: bool | IResolvable = None,
  user_claim: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.issuerId">issuer_id</a></code> | <code>str</code> | The issuer ID (iss claim) to validate against in incoming JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.profileName">profile_name</a></code> | <code>str</code> | The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.audiences">audiences</a></code> | <code>typing.List[str]</code> | List of allowed audiences (aud claim) to validate in JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.clockSkewLeeway">clock_skew_leeway</a></code> | <code>typing.Union[int, float]</code> | Leeway for clock skew in seconds when validating time-based claims. Defaults to 0. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwksCaPem">jwks_ca_pem</a></code> | <code>str</code> | Optional CA certificate (PEM format) for JWKS URI TLS validation. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwksUri">jwks_uri</a></code> | <code>str</code> | The JWKS URI to fetch public keys from. Required when use_jwks=true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwtType">jwt_type</a></code> | <code>str</code> | The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.noDefaultPolicy">no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.optionalAuthorizationDetails">optional_authorization_details</a></code> | <code>bool \| cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.publicKeys">public_keys</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>]</code> | public_keys block. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.supportedAlgorithms">supported_algorithms</a></code> | <code>typing.List[str]</code> | List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.useJwks">use_jwks</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.userClaim">user_claim</a></code> | <code>str</code> | The claim to use as the user identifier. Defaults to 'sub'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `issuer_id`<sup>Required</sup> <a name="issuer_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.issuerId"></a>

- *Type:* str

The issuer ID (iss claim) to validate against in incoming JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#issuer_id OauthResourceServerConfigProfile#issuer_id}

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.profileName"></a>

- *Type:* str

The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#profile_name OauthResourceServerConfigProfile#profile_name}

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.audiences"></a>

- *Type:* typing.List[str]

List of allowed audiences (aud claim) to validate in JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#audiences OauthResourceServerConfigProfile#audiences}

---

##### `clock_skew_leeway`<sup>Optional</sup> <a name="clock_skew_leeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.clockSkewLeeway"></a>

- *Type:* typing.Union[int, float]

Leeway for clock skew in seconds when validating time-based claims. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#clock_skew_leeway OauthResourceServerConfigProfile#clock_skew_leeway}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#enabled OauthResourceServerConfigProfile#enabled}

---

##### `jwks_ca_pem`<sup>Optional</sup> <a name="jwks_ca_pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwksCaPem"></a>

- *Type:* str

Optional CA certificate (PEM format) for JWKS URI TLS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwks_ca_pem OauthResourceServerConfigProfile#jwks_ca_pem}

---

##### `jwks_uri`<sup>Optional</sup> <a name="jwks_uri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwksUri"></a>

- *Type:* str

The JWKS URI to fetch public keys from. Required when use_jwks=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwks_uri OauthResourceServerConfigProfile#jwks_uri}

---

##### `jwt_type`<sup>Optional</sup> <a name="jwt_type" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwtType"></a>

- *Type:* str

The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwt_type OauthResourceServerConfigProfile#jwt_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#namespace OauthResourceServerConfigProfile#namespace}

---

##### `no_default_policy`<sup>Optional</sup> <a name="no_default_policy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.noDefaultPolicy"></a>

- *Type:* bool | cdktn.IResolvable

If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#no_default_policy OauthResourceServerConfigProfile#no_default_policy}

---

##### `optional_authorization_details`<sup>Optional</sup> <a name="optional_authorization_details" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.optionalAuthorizationDetails"></a>

- *Type:* bool | cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#optional_authorization_details OauthResourceServerConfigProfile#optional_authorization_details}

---

##### `public_keys`<sup>Optional</sup> <a name="public_keys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.publicKeys"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>]

public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#public_keys OauthResourceServerConfigProfile#public_keys}

---

##### `supported_algorithms`<sup>Optional</sup> <a name="supported_algorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.supportedAlgorithms"></a>

- *Type:* typing.List[str]

List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#supported_algorithms OauthResourceServerConfigProfile#supported_algorithms}

---

##### `use_jwks`<sup>Optional</sup> <a name="use_jwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.useJwks"></a>

- *Type:* bool | cdktn.IResolvable

If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#use_jwks OauthResourceServerConfigProfile#use_jwks}

---

##### `user_claim`<sup>Optional</sup> <a name="user_claim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.userClaim"></a>

- *Type:* str

The claim to use as the user identifier. Defaults to 'sub'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#user_claim OauthResourceServerConfigProfile#user_claim}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys">put_public_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetAudiences">reset_audiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetClockSkewLeeway">reset_clock_skew_leeway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksCaPem">reset_jwks_ca_pem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksUri">reset_jwks_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwtType">reset_jwt_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNoDefaultPolicy">reset_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOptionalAuthorizationDetails">reset_optional_authorization_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetPublicKeys">reset_public_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetSupportedAlgorithms">reset_supported_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUseJwks">reset_use_jwks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUserClaim">reset_user_claim</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_public_keys` <a name="put_public_keys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys"></a>

```python
def put_public_keys(
  value: IResolvable | typing.List[OauthResourceServerConfigProfilePublicKeys]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>]

---

##### `reset_audiences` <a name="reset_audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetAudiences"></a>

```python
def reset_audiences() -> None
```

##### `reset_clock_skew_leeway` <a name="reset_clock_skew_leeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetClockSkewLeeway"></a>

```python
def reset_clock_skew_leeway() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_jwks_ca_pem` <a name="reset_jwks_ca_pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksCaPem"></a>

```python
def reset_jwks_ca_pem() -> None
```

##### `reset_jwks_uri` <a name="reset_jwks_uri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksUri"></a>

```python
def reset_jwks_uri() -> None
```

##### `reset_jwt_type` <a name="reset_jwt_type" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwtType"></a>

```python
def reset_jwt_type() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_no_default_policy` <a name="reset_no_default_policy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNoDefaultPolicy"></a>

```python
def reset_no_default_policy() -> None
```

##### `reset_optional_authorization_details` <a name="reset_optional_authorization_details" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOptionalAuthorizationDetails"></a>

```python
def reset_optional_authorization_details() -> None
```

##### `reset_public_keys` <a name="reset_public_keys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetPublicKeys"></a>

```python
def reset_public_keys() -> None
```

##### `reset_supported_algorithms` <a name="reset_supported_algorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetSupportedAlgorithms"></a>

```python
def reset_supported_algorithms() -> None
```

##### `reset_use_jwks` <a name="reset_use_jwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUseJwks"></a>

```python
def reset_use_jwks() -> None
```

##### `reset_user_claim` <a name="reset_user_claim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUserClaim"></a>

```python
def reset_user_claim() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OauthResourceServerConfigProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct"></a>

```python
from cdktn_provider_vault import oauth_resource_server_config_profile

oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement"></a>

```python
from cdktn_provider_vault import oauth_resource_server_config_profile

oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource"></a>

```python
from cdktn_provider_vault import oauth_resource_server_config_profile

oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport"></a>

```python
from cdktn_provider_vault import oauth_resource_server_config_profile

oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OauthResourceServerConfigProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OauthResourceServerConfigProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OauthResourceServerConfigProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OauthResourceServerConfigProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeys">public_keys</a></code> | <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList">OauthResourceServerConfigProfilePublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiencesInput">audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeewayInput">clock_skew_leeway_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerIdInput">issuer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPemInput">jwks_ca_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUriInput">jwks_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtTypeInput">jwt_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicyInput">no_default_policy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetailsInput">optional_authorization_details_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeysInput">public_keys_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithmsInput">supported_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwksInput">use_jwks_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaimInput">user_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeeway">clock_skew_leeway</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerId">issuer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPem">jwks_ca_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUri">jwks_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtType">jwt_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicy">no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetails">optional_authorization_details</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithms">supported_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwks">use_jwks</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaim">user_claim</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `public_keys`<sup>Required</sup> <a name="public_keys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeys"></a>

```python
public_keys: OauthResourceServerConfigProfilePublicKeysList
```

- *Type:* <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList">OauthResourceServerConfigProfilePublicKeysList</a>

---

##### `audiences_input`<sup>Optional</sup> <a name="audiences_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiencesInput"></a>

```python
audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `clock_skew_leeway_input`<sup>Optional</sup> <a name="clock_skew_leeway_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeewayInput"></a>

```python
clock_skew_leeway_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `issuer_id_input`<sup>Optional</sup> <a name="issuer_id_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerIdInput"></a>

```python
issuer_id_input: str
```

- *Type:* str

---

##### `jwks_ca_pem_input`<sup>Optional</sup> <a name="jwks_ca_pem_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPemInput"></a>

```python
jwks_ca_pem_input: str
```

- *Type:* str

---

##### `jwks_uri_input`<sup>Optional</sup> <a name="jwks_uri_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUriInput"></a>

```python
jwks_uri_input: str
```

- *Type:* str

---

##### `jwt_type_input`<sup>Optional</sup> <a name="jwt_type_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtTypeInput"></a>

```python
jwt_type_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `no_default_policy_input`<sup>Optional</sup> <a name="no_default_policy_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicyInput"></a>

```python
no_default_policy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `optional_authorization_details_input`<sup>Optional</sup> <a name="optional_authorization_details_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetailsInput"></a>

```python
optional_authorization_details_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `public_keys_input`<sup>Optional</sup> <a name="public_keys_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeysInput"></a>

```python
public_keys_input: IResolvable | typing.List[OauthResourceServerConfigProfilePublicKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>]

---

##### `supported_algorithms_input`<sup>Optional</sup> <a name="supported_algorithms_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithmsInput"></a>

```python
supported_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_jwks_input`<sup>Optional</sup> <a name="use_jwks_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwksInput"></a>

```python
use_jwks_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `user_claim_input`<sup>Optional</sup> <a name="user_claim_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaimInput"></a>

```python
user_claim_input: str
```

- *Type:* str

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `clock_skew_leeway`<sup>Required</sup> <a name="clock_skew_leeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeeway"></a>

```python
clock_skew_leeway: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `issuer_id`<sup>Required</sup> <a name="issuer_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerId"></a>

```python
issuer_id: str
```

- *Type:* str

---

##### `jwks_ca_pem`<sup>Required</sup> <a name="jwks_ca_pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPem"></a>

```python
jwks_ca_pem: str
```

- *Type:* str

---

##### `jwks_uri`<sup>Required</sup> <a name="jwks_uri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

---

##### `jwt_type`<sup>Required</sup> <a name="jwt_type" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtType"></a>

```python
jwt_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `no_default_policy`<sup>Required</sup> <a name="no_default_policy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicy"></a>

```python
no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `optional_authorization_details`<sup>Required</sup> <a name="optional_authorization_details" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetails"></a>

```python
optional_authorization_details: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `supported_algorithms`<sup>Required</sup> <a name="supported_algorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithms"></a>

```python
supported_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_jwks`<sup>Required</sup> <a name="use_jwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwks"></a>

```python
use_jwks: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `user_claim`<sup>Required</sup> <a name="user_claim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaim"></a>

```python
user_claim: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OauthResourceServerConfigProfileConfig <a name="OauthResourceServerConfigProfileConfig" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.Initializer"></a>

```python
from cdktn_provider_vault import oauth_resource_server_config_profile

oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  issuer_id: str,
  profile_name: str,
  audiences: typing.List[str] = None,
  clock_skew_leeway: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None,
  jwks_ca_pem: str = None,
  jwks_uri: str = None,
  jwt_type: str = None,
  namespace: str = None,
  no_default_policy: bool | IResolvable = None,
  optional_authorization_details: bool | IResolvable = None,
  public_keys: IResolvable | typing.List[OauthResourceServerConfigProfilePublicKeys] = None,
  supported_algorithms: typing.List[str] = None,
  use_jwks: bool | IResolvable = None,
  user_claim: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.issuerId">issuer_id</a></code> | <code>str</code> | The issuer ID (iss claim) to validate against in incoming JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.profileName">profile_name</a></code> | <code>str</code> | The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | List of allowed audiences (aud claim) to validate in JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.clockSkewLeeway">clock_skew_leeway</a></code> | <code>typing.Union[int, float]</code> | Leeway for clock skew in seconds when validating time-based claims. Defaults to 0. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksCaPem">jwks_ca_pem</a></code> | <code>str</code> | Optional CA certificate (PEM format) for JWKS URI TLS validation. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksUri">jwks_uri</a></code> | <code>str</code> | The JWKS URI to fetch public keys from. Required when use_jwks=true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwtType">jwt_type</a></code> | <code>str</code> | The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.noDefaultPolicy">no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.optionalAuthorizationDetails">optional_authorization_details</a></code> | <code>bool \| cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.publicKeys">public_keys</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>]</code> | public_keys block. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.supportedAlgorithms">supported_algorithms</a></code> | <code>typing.List[str]</code> | List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.useJwks">use_jwks</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.userClaim">user_claim</a></code> | <code>str</code> | The claim to use as the user identifier. Defaults to 'sub'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `issuer_id`<sup>Required</sup> <a name="issuer_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.issuerId"></a>

```python
issuer_id: str
```

- *Type:* str

The issuer ID (iss claim) to validate against in incoming JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#issuer_id OauthResourceServerConfigProfile#issuer_id}

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#profile_name OauthResourceServerConfigProfile#profile_name}

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

List of allowed audiences (aud claim) to validate in JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#audiences OauthResourceServerConfigProfile#audiences}

---

##### `clock_skew_leeway`<sup>Optional</sup> <a name="clock_skew_leeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.clockSkewLeeway"></a>

```python
clock_skew_leeway: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Leeway for clock skew in seconds when validating time-based claims. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#clock_skew_leeway OauthResourceServerConfigProfile#clock_skew_leeway}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#enabled OauthResourceServerConfigProfile#enabled}

---

##### `jwks_ca_pem`<sup>Optional</sup> <a name="jwks_ca_pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksCaPem"></a>

```python
jwks_ca_pem: str
```

- *Type:* str

Optional CA certificate (PEM format) for JWKS URI TLS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwks_ca_pem OauthResourceServerConfigProfile#jwks_ca_pem}

---

##### `jwks_uri`<sup>Optional</sup> <a name="jwks_uri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

The JWKS URI to fetch public keys from. Required when use_jwks=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwks_uri OauthResourceServerConfigProfile#jwks_uri}

---

##### `jwt_type`<sup>Optional</sup> <a name="jwt_type" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwtType"></a>

```python
jwt_type: str
```

- *Type:* str

The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwt_type OauthResourceServerConfigProfile#jwt_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#namespace OauthResourceServerConfigProfile#namespace}

---

##### `no_default_policy`<sup>Optional</sup> <a name="no_default_policy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.noDefaultPolicy"></a>

```python
no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#no_default_policy OauthResourceServerConfigProfile#no_default_policy}

---

##### `optional_authorization_details`<sup>Optional</sup> <a name="optional_authorization_details" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.optionalAuthorizationDetails"></a>

```python
optional_authorization_details: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#optional_authorization_details OauthResourceServerConfigProfile#optional_authorization_details}

---

##### `public_keys`<sup>Optional</sup> <a name="public_keys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.publicKeys"></a>

```python
public_keys: IResolvable | typing.List[OauthResourceServerConfigProfilePublicKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>]

public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#public_keys OauthResourceServerConfigProfile#public_keys}

---

##### `supported_algorithms`<sup>Optional</sup> <a name="supported_algorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.supportedAlgorithms"></a>

```python
supported_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#supported_algorithms OauthResourceServerConfigProfile#supported_algorithms}

---

##### `use_jwks`<sup>Optional</sup> <a name="use_jwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.useJwks"></a>

```python
use_jwks: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#use_jwks OauthResourceServerConfigProfile#use_jwks}

---

##### `user_claim`<sup>Optional</sup> <a name="user_claim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.userClaim"></a>

```python
user_claim: str
```

- *Type:* str

The claim to use as the user identifier. Defaults to 'sub'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#user_claim OauthResourceServerConfigProfile#user_claim}

---

### OauthResourceServerConfigProfilePublicKeys <a name="OauthResourceServerConfigProfilePublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.Initializer"></a>

```python
from cdktn_provider_vault import oauth_resource_server_config_profile

oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys(
  key_id: str,
  pem: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.keyId">key_id</a></code> | <code>str</code> | The key ID (kid) for this public key. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.pem">pem</a></code> | <code>str</code> | The PEM-encoded public key. |

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

The key ID (kid) for this public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#key_id OauthResourceServerConfigProfile#key_id}

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.pem"></a>

```python
pem: str
```

- *Type:* str

The PEM-encoded public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#pem OauthResourceServerConfigProfile#pem}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthResourceServerConfigProfilePublicKeysList <a name="OauthResourceServerConfigProfilePublicKeysList" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer"></a>

```python
from cdktn_provider_vault import oauth_resource_server_config_profile

oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OauthResourceServerConfigProfilePublicKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OauthResourceServerConfigProfilePublicKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>]

---


### OauthResourceServerConfigProfilePublicKeysOutputReference <a name="OauthResourceServerConfigProfilePublicKeysOutputReference" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_vault import oauth_resource_server_config_profile

oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pemInput">pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pem">pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `pem_input`<sup>Optional</sup> <a name="pem_input" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pemInput"></a>

```python
pem_input: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pem"></a>

```python
pem: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OauthResourceServerConfigProfilePublicKeys
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>

---



