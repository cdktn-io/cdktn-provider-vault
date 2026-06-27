# `oauthResourceServerConfigProfile` Submodule <a name="`oauthResourceServerConfigProfile` Submodule" id="@cdktn/provider-vault.oauthResourceServerConfigProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthResourceServerConfigProfile <a name="OauthResourceServerConfigProfile" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile vault_oauth_resource_server_config_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer"></a>

```java
import io.cdktn.providers.vault.oauth_resource_server_config_profile.OauthResourceServerConfigProfile;

OauthResourceServerConfigProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .issuerId(java.lang.String)
    .profileName(java.lang.String)
//  .audiences(java.util.List<java.lang.String>)
//  .clockSkewLeeway(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
//  .jwksCaPem(java.lang.String)
//  .jwksUri(java.lang.String)
//  .jwtType(java.lang.String)
//  .namespace(java.lang.String)
//  .noDefaultPolicy(java.lang.Boolean|IResolvable)
//  .optionalAuthorizationDetails(java.lang.Boolean|IResolvable)
//  .publicKeys(IResolvable|java.util.List<OauthResourceServerConfigProfilePublicKeys>)
//  .supportedAlgorithms(java.util.List<java.lang.String>)
//  .useJwks(java.lang.Boolean|IResolvable)
//  .userClaim(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.issuerId">issuerId</a></code> | <code>java.lang.String</code> | The issuer ID (iss claim) to validate against in incoming JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.profileName">profileName</a></code> | <code>java.lang.String</code> | The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed audiences (aud claim) to validate in JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.clockSkewLeeway">clockSkewLeeway</a></code> | <code>java.lang.Number</code> | Leeway for clock skew in seconds when validating time-based claims. Defaults to 0. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwksCaPem">jwksCaPem</a></code> | <code>java.lang.String</code> | Optional CA certificate (PEM format) for JWKS URI TLS validation. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | The JWKS URI to fetch public keys from. Required when use_jwks=true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwtType">jwtType</a></code> | <code>java.lang.String</code> | The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.noDefaultPolicy">noDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.optionalAuthorizationDetails">optionalAuthorizationDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.publicKeys">publicKeys</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>></code> | public_keys block. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.supportedAlgorithms">supportedAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.useJwks">useJwks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.userClaim">userClaim</a></code> | <code>java.lang.String</code> | The claim to use as the user identifier. Defaults to 'sub'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `issuerId`<sup>Required</sup> <a name="issuerId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.issuerId"></a>

- *Type:* java.lang.String

The issuer ID (iss claim) to validate against in incoming JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#issuer_id OauthResourceServerConfigProfile#issuer_id}

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.profileName"></a>

- *Type:* java.lang.String

The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#profile_name OauthResourceServerConfigProfile#profile_name}

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.audiences"></a>

- *Type:* java.util.List<java.lang.String>

List of allowed audiences (aud claim) to validate in JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#audiences OauthResourceServerConfigProfile#audiences}

---

##### `clockSkewLeeway`<sup>Optional</sup> <a name="clockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.clockSkewLeeway"></a>

- *Type:* java.lang.Number

Leeway for clock skew in seconds when validating time-based claims. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#clock_skew_leeway OauthResourceServerConfigProfile#clock_skew_leeway}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#enabled OauthResourceServerConfigProfile#enabled}

---

##### `jwksCaPem`<sup>Optional</sup> <a name="jwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwksCaPem"></a>

- *Type:* java.lang.String

Optional CA certificate (PEM format) for JWKS URI TLS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwks_ca_pem OauthResourceServerConfigProfile#jwks_ca_pem}

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwksUri"></a>

- *Type:* java.lang.String

The JWKS URI to fetch public keys from. Required when use_jwks=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwks_uri OauthResourceServerConfigProfile#jwks_uri}

---

##### `jwtType`<sup>Optional</sup> <a name="jwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.jwtType"></a>

- *Type:* java.lang.String

The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwt_type OauthResourceServerConfigProfile#jwt_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#namespace OauthResourceServerConfigProfile#namespace}

---

##### `noDefaultPolicy`<sup>Optional</sup> <a name="noDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.noDefaultPolicy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#no_default_policy OauthResourceServerConfigProfile#no_default_policy}

---

##### `optionalAuthorizationDetails`<sup>Optional</sup> <a name="optionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.optionalAuthorizationDetails"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#optional_authorization_details OauthResourceServerConfigProfile#optional_authorization_details}

---

##### `publicKeys`<sup>Optional</sup> <a name="publicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.publicKeys"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>>

public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#public_keys OauthResourceServerConfigProfile#public_keys}

---

##### `supportedAlgorithms`<sup>Optional</sup> <a name="supportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.supportedAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#supported_algorithms OauthResourceServerConfigProfile#supported_algorithms}

---

##### `useJwks`<sup>Optional</sup> <a name="useJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.useJwks"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#use_jwks OauthResourceServerConfigProfile#use_jwks}

---

##### `userClaim`<sup>Optional</sup> <a name="userClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.userClaim"></a>

- *Type:* java.lang.String

The claim to use as the user identifier. Defaults to 'sub'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#user_claim OauthResourceServerConfigProfile#user_claim}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys">putPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetClockSkewLeeway">resetClockSkewLeeway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksCaPem">resetJwksCaPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwtType">resetJwtType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNoDefaultPolicy">resetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOptionalAuthorizationDetails">resetOptionalAuthorizationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetPublicKeys">resetPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetSupportedAlgorithms">resetSupportedAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUseJwks">resetUseJwks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUserClaim">resetUserClaim</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPublicKeys` <a name="putPublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys"></a>

```java
public void putPublicKeys(IResolvable|java.util.List<OauthResourceServerConfigProfilePublicKeys> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>>

---

##### `resetAudiences` <a name="resetAudiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetAudiences"></a>

```java
public void resetAudiences()
```

##### `resetClockSkewLeeway` <a name="resetClockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetClockSkewLeeway"></a>

```java
public void resetClockSkewLeeway()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetJwksCaPem` <a name="resetJwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksCaPem"></a>

```java
public void resetJwksCaPem()
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksUri"></a>

```java
public void resetJwksUri()
```

##### `resetJwtType` <a name="resetJwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwtType"></a>

```java
public void resetJwtType()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNoDefaultPolicy` <a name="resetNoDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNoDefaultPolicy"></a>

```java
public void resetNoDefaultPolicy()
```

##### `resetOptionalAuthorizationDetails` <a name="resetOptionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOptionalAuthorizationDetails"></a>

```java
public void resetOptionalAuthorizationDetails()
```

##### `resetPublicKeys` <a name="resetPublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetPublicKeys"></a>

```java
public void resetPublicKeys()
```

##### `resetSupportedAlgorithms` <a name="resetSupportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetSupportedAlgorithms"></a>

```java
public void resetSupportedAlgorithms()
```

##### `resetUseJwks` <a name="resetUseJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUseJwks"></a>

```java
public void resetUseJwks()
```

##### `resetUserClaim` <a name="resetUserClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUserClaim"></a>

```java
public void resetUserClaim()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OauthResourceServerConfigProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct"></a>

```java
import io.cdktn.providers.vault.oauth_resource_server_config_profile.OauthResourceServerConfigProfile;

OauthResourceServerConfigProfile.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.oauth_resource_server_config_profile.OauthResourceServerConfigProfile;

OauthResourceServerConfigProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.oauth_resource_server_config_profile.OauthResourceServerConfigProfile;

OauthResourceServerConfigProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.oauth_resource_server_config_profile.OauthResourceServerConfigProfile;

OauthResourceServerConfigProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OauthResourceServerConfigProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OauthResourceServerConfigProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OauthResourceServerConfigProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OauthResourceServerConfigProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OauthResourceServerConfigProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeys">publicKeys</a></code> | <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList">OauthResourceServerConfigProfilePublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeewayInput">clockSkewLeewayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerIdInput">issuerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPemInput">jwksCaPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUriInput">jwksUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtTypeInput">jwtTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicyInput">noDefaultPolicyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetailsInput">optionalAuthorizationDetailsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileNameInput">profileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeysInput">publicKeysInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithmsInput">supportedAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwksInput">useJwksInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaimInput">userClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeeway">clockSkewLeeway</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerId">issuerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPem">jwksCaPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtType">jwtType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetails">optionalAuthorizationDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithms">supportedAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwks">useJwks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaim">userClaim</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `publicKeys`<sup>Required</sup> <a name="publicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeys"></a>

```java
public OauthResourceServerConfigProfilePublicKeysList getPublicKeys();
```

- *Type:* <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList">OauthResourceServerConfigProfilePublicKeysList</a>

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clockSkewLeewayInput`<sup>Optional</sup> <a name="clockSkewLeewayInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeewayInput"></a>

```java
public java.lang.Number getClockSkewLeewayInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `issuerIdInput`<sup>Optional</sup> <a name="issuerIdInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerIdInput"></a>

```java
public java.lang.String getIssuerIdInput();
```

- *Type:* java.lang.String

---

##### `jwksCaPemInput`<sup>Optional</sup> <a name="jwksCaPemInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPemInput"></a>

```java
public java.lang.String getJwksCaPemInput();
```

- *Type:* java.lang.String

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUriInput"></a>

```java
public java.lang.String getJwksUriInput();
```

- *Type:* java.lang.String

---

##### `jwtTypeInput`<sup>Optional</sup> <a name="jwtTypeInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtTypeInput"></a>

```java
public java.lang.String getJwtTypeInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `noDefaultPolicyInput`<sup>Optional</sup> <a name="noDefaultPolicyInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `optionalAuthorizationDetailsInput`<sup>Optional</sup> <a name="optionalAuthorizationDetailsInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetailsInput"></a>

```java
public java.lang.Boolean|IResolvable getOptionalAuthorizationDetailsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileNameInput"></a>

```java
public java.lang.String getProfileNameInput();
```

- *Type:* java.lang.String

---

##### `publicKeysInput`<sup>Optional</sup> <a name="publicKeysInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeysInput"></a>

```java
public IResolvable|java.util.List<OauthResourceServerConfigProfilePublicKeys> getPublicKeysInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>>

---

##### `supportedAlgorithmsInput`<sup>Optional</sup> <a name="supportedAlgorithmsInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getSupportedAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useJwksInput`<sup>Optional</sup> <a name="useJwksInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwksInput"></a>

```java
public java.lang.Boolean|IResolvable getUseJwksInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userClaimInput`<sup>Optional</sup> <a name="userClaimInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaimInput"></a>

```java
public java.lang.String getUserClaimInput();
```

- *Type:* java.lang.String

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clockSkewLeeway`<sup>Required</sup> <a name="clockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeeway"></a>

```java
public java.lang.Number getClockSkewLeeway();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `issuerId`<sup>Required</sup> <a name="issuerId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerId"></a>

```java
public java.lang.String getIssuerId();
```

- *Type:* java.lang.String

---

##### `jwksCaPem`<sup>Required</sup> <a name="jwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPem"></a>

```java
public java.lang.String getJwksCaPem();
```

- *Type:* java.lang.String

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

---

##### `jwtType`<sup>Required</sup> <a name="jwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtType"></a>

```java
public java.lang.String getJwtType();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `noDefaultPolicy`<sup>Required</sup> <a name="noDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `optionalAuthorizationDetails`<sup>Required</sup> <a name="optionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetails"></a>

```java
public java.lang.Boolean|IResolvable getOptionalAuthorizationDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

##### `supportedAlgorithms`<sup>Required</sup> <a name="supportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithms"></a>

```java
public java.util.List<java.lang.String> getSupportedAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useJwks`<sup>Required</sup> <a name="useJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwks"></a>

```java
public java.lang.Boolean|IResolvable getUseJwks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userClaim`<sup>Required</sup> <a name="userClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaim"></a>

```java
public java.lang.String getUserClaim();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OauthResourceServerConfigProfileConfig <a name="OauthResourceServerConfigProfileConfig" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.oauth_resource_server_config_profile.OauthResourceServerConfigProfileConfig;

OauthResourceServerConfigProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .issuerId(java.lang.String)
    .profileName(java.lang.String)
//  .audiences(java.util.List<java.lang.String>)
//  .clockSkewLeeway(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
//  .jwksCaPem(java.lang.String)
//  .jwksUri(java.lang.String)
//  .jwtType(java.lang.String)
//  .namespace(java.lang.String)
//  .noDefaultPolicy(java.lang.Boolean|IResolvable)
//  .optionalAuthorizationDetails(java.lang.Boolean|IResolvable)
//  .publicKeys(IResolvable|java.util.List<OauthResourceServerConfigProfilePublicKeys>)
//  .supportedAlgorithms(java.util.List<java.lang.String>)
//  .useJwks(java.lang.Boolean|IResolvable)
//  .userClaim(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.issuerId">issuerId</a></code> | <code>java.lang.String</code> | The issuer ID (iss claim) to validate against in incoming JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.profileName">profileName</a></code> | <code>java.lang.String</code> | The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | List of allowed audiences (aud claim) to validate in JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.clockSkewLeeway">clockSkewLeeway</a></code> | <code>java.lang.Number</code> | Leeway for clock skew in seconds when validating time-based claims. Defaults to 0. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksCaPem">jwksCaPem</a></code> | <code>java.lang.String</code> | Optional CA certificate (PEM format) for JWKS URI TLS validation. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | The JWKS URI to fetch public keys from. Required when use_jwks=true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwtType">jwtType</a></code> | <code>java.lang.String</code> | The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.optionalAuthorizationDetails">optionalAuthorizationDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.publicKeys">publicKeys</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>></code> | public_keys block. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.supportedAlgorithms">supportedAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.useJwks">useJwks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.userClaim">userClaim</a></code> | <code>java.lang.String</code> | The claim to use as the user identifier. Defaults to 'sub'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `issuerId`<sup>Required</sup> <a name="issuerId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.issuerId"></a>

```java
public java.lang.String getIssuerId();
```

- *Type:* java.lang.String

The issuer ID (iss claim) to validate against in incoming JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#issuer_id OauthResourceServerConfigProfile#issuer_id}

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#profile_name OauthResourceServerConfigProfile#profile_name}

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

List of allowed audiences (aud claim) to validate in JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#audiences OauthResourceServerConfigProfile#audiences}

---

##### `clockSkewLeeway`<sup>Optional</sup> <a name="clockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.clockSkewLeeway"></a>

```java
public java.lang.Number getClockSkewLeeway();
```

- *Type:* java.lang.Number

Leeway for clock skew in seconds when validating time-based claims. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#clock_skew_leeway OauthResourceServerConfigProfile#clock_skew_leeway}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#enabled OauthResourceServerConfigProfile#enabled}

---

##### `jwksCaPem`<sup>Optional</sup> <a name="jwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksCaPem"></a>

```java
public java.lang.String getJwksCaPem();
```

- *Type:* java.lang.String

Optional CA certificate (PEM format) for JWKS URI TLS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwks_ca_pem OauthResourceServerConfigProfile#jwks_ca_pem}

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

The JWKS URI to fetch public keys from. Required when use_jwks=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwks_uri OauthResourceServerConfigProfile#jwks_uri}

---

##### `jwtType`<sup>Optional</sup> <a name="jwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwtType"></a>

```java
public java.lang.String getJwtType();
```

- *Type:* java.lang.String

The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#jwt_type OauthResourceServerConfigProfile#jwt_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#namespace OauthResourceServerConfigProfile#namespace}

---

##### `noDefaultPolicy`<sup>Optional</sup> <a name="noDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.noDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#no_default_policy OauthResourceServerConfigProfile#no_default_policy}

---

##### `optionalAuthorizationDetails`<sup>Optional</sup> <a name="optionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.optionalAuthorizationDetails"></a>

```java
public java.lang.Boolean|IResolvable getOptionalAuthorizationDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#optional_authorization_details OauthResourceServerConfigProfile#optional_authorization_details}

---

##### `publicKeys`<sup>Optional</sup> <a name="publicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.publicKeys"></a>

```java
public IResolvable|java.util.List<OauthResourceServerConfigProfilePublicKeys> getPublicKeys();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>>

public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#public_keys OauthResourceServerConfigProfile#public_keys}

---

##### `supportedAlgorithms`<sup>Optional</sup> <a name="supportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.supportedAlgorithms"></a>

```java
public java.util.List<java.lang.String> getSupportedAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#supported_algorithms OauthResourceServerConfigProfile#supported_algorithms}

---

##### `useJwks`<sup>Optional</sup> <a name="useJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.useJwks"></a>

```java
public java.lang.Boolean|IResolvable getUseJwks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#use_jwks OauthResourceServerConfigProfile#use_jwks}

---

##### `userClaim`<sup>Optional</sup> <a name="userClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.userClaim"></a>

```java
public java.lang.String getUserClaim();
```

- *Type:* java.lang.String

The claim to use as the user identifier. Defaults to 'sub'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#user_claim OauthResourceServerConfigProfile#user_claim}

---

### OauthResourceServerConfigProfilePublicKeys <a name="OauthResourceServerConfigProfilePublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.Initializer"></a>

```java
import io.cdktn.providers.vault.oauth_resource_server_config_profile.OauthResourceServerConfigProfilePublicKeys;

OauthResourceServerConfigProfilePublicKeys.builder()
    .keyId(java.lang.String)
    .pem(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The key ID (kid) for this public key. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.pem">pem</a></code> | <code>java.lang.String</code> | The PEM-encoded public key. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The key ID (kid) for this public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#key_id OauthResourceServerConfigProfile#key_id}

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.pem"></a>

```java
public java.lang.String getPem();
```

- *Type:* java.lang.String

The PEM-encoded public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/oauth_resource_server_config_profile#pem OauthResourceServerConfigProfile#pem}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthResourceServerConfigProfilePublicKeysList <a name="OauthResourceServerConfigProfilePublicKeysList" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer"></a>

```java
import io.cdktn.providers.vault.oauth_resource_server_config_profile.OauthResourceServerConfigProfilePublicKeysList;

new OauthResourceServerConfigProfilePublicKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get"></a>

```java
public OauthResourceServerConfigProfilePublicKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OauthResourceServerConfigProfilePublicKeys> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>>

---


### OauthResourceServerConfigProfilePublicKeysOutputReference <a name="OauthResourceServerConfigProfilePublicKeysOutputReference" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.vault.oauth_resource_server_config_profile.OauthResourceServerConfigProfilePublicKeysOutputReference;

new OauthResourceServerConfigProfilePublicKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pemInput">pemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pem">pem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `pemInput`<sup>Optional</sup> <a name="pemInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pemInput"></a>

```java
public java.lang.String getPemInput();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `pem`<sup>Required</sup> <a name="pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pem"></a>

```java
public java.lang.String getPem();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.internalValue"></a>

```java
public IResolvable|OauthResourceServerConfigProfilePublicKeys getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys">OauthResourceServerConfigProfilePublicKeys</a>

---



