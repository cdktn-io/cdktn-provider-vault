# `radiusAuthBackend` Submodule <a name="`radiusAuthBackend` Submodule" id="@cdktn/provider-vault.radiusAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RadiusAuthBackend <a name="RadiusAuthBackend" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend vault_radius_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend.RadiusAuthBackend;

RadiusAuthBackend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .host(java.lang.String)
    .mount(java.lang.String)
    .secretWo(java.lang.String)
    .secretWoVersion(java.lang.Number)
//  .aliasMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .dialTimeout(java.lang.Number)
//  .namespace(java.lang.String)
//  .nasPort(java.lang.Number)
//  .port(java.lang.Number)
//  .readTimeout(java.lang.Number)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
//  .unregisteredUserPolicies(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path of the enabled RADIUS auth backend mount to configure. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.secretWo">secretWo</a></code> | <code>java.lang.String</code> | The RADIUS shared secret. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.secretWoVersion">secretWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `secret_wo` field. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.dialTimeout">dialTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait for a backend connection before timing out. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.nasPort">nasPort</a></code> | <code>java.lang.Number</code> | The NAS-Port attribute of the RADIUS request. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The UDP port where the RADIUS server is listening on. Defaults to `1812`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.readTimeout">readTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait for a response from the RADIUS server. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.unregisteredUserPolicies">unregisteredUserPolicies</a></code> | <code>java.util.List<java.lang.String></code> | A set of policies to be granted to unregistered users. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.host"></a>

- *Type:* java.lang.String

The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#host RadiusAuthBackend#host}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path of the enabled RADIUS auth backend mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#mount RadiusAuthBackend#mount}

---

##### `secretWo`<sup>Required</sup> <a name="secretWo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.secretWo"></a>

- *Type:* java.lang.String

The RADIUS shared secret. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#secret_wo RadiusAuthBackend#secret_wo}

---

##### `secretWoVersion`<sup>Required</sup> <a name="secretWoVersion" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.secretWoVersion"></a>

- *Type:* java.lang.Number

Version counter for the write-only `secret_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the secret changes. Increment this value whenever you update `secret_wo` so Terraform detects the change and applies an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#secret_wo_version RadiusAuthBackend#secret_wo_version}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.aliasMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#alias_metadata RadiusAuthBackend#alias_metadata}

---

##### `dialTimeout`<sup>Optional</sup> <a name="dialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.dialTimeout"></a>

- *Type:* java.lang.Number

Number of seconds to wait for a backend connection before timing out.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#dial_timeout RadiusAuthBackend#dial_timeout}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#namespace RadiusAuthBackend#namespace}

---

##### `nasPort`<sup>Optional</sup> <a name="nasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.nasPort"></a>

- *Type:* java.lang.Number

The NAS-Port attribute of the RADIUS request.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#nas_port RadiusAuthBackend#nas_port}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The UDP port where the RADIUS server is listening on. Defaults to `1812`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#port RadiusAuthBackend#port}

---

##### `readTimeout`<sup>Optional</sup> <a name="readTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.readTimeout"></a>

- *Type:* java.lang.Number

Number of seconds to wait for a response from the RADIUS server.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#read_timeout RadiusAuthBackend#read_timeout}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_bound_cidrs RadiusAuthBackend#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_explicit_max_ttl RadiusAuthBackend#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_max_ttl RadiusAuthBackend#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_no_default_policy RadiusAuthBackend#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_num_uses RadiusAuthBackend#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_period RadiusAuthBackend#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_policies RadiusAuthBackend#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_ttl RadiusAuthBackend#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_type RadiusAuthBackend#token_type}

---

##### `unregisteredUserPolicies`<sup>Optional</sup> <a name="unregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.unregisteredUserPolicies"></a>

- *Type:* java.util.List<java.lang.String>

A set of policies to be granted to unregistered users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#unregistered_user_policies RadiusAuthBackend#unregistered_user_policies}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetAliasMetadata">resetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetDialTimeout">resetDialTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNasPort">resetNasPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetReadTimeout">resetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetUnregisteredUserPolicies">resetUnregisteredUserPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAliasMetadata` <a name="resetAliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetAliasMetadata"></a>

```java
public void resetAliasMetadata()
```

##### `resetDialTimeout` <a name="resetDialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetDialTimeout"></a>

```java
public void resetDialTimeout()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNasPort` <a name="resetNasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNasPort"></a>

```java
public void resetNasPort()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetPort"></a>

```java
public void resetPort()
```

##### `resetReadTimeout` <a name="resetReadTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetReadTimeout"></a>

```java
public void resetReadTimeout()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenType"></a>

```java
public void resetTokenType()
```

##### `resetUnregisteredUserPolicies` <a name="resetUnregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetUnregisteredUserPolicies"></a>

```java
public void resetUnregisteredUserPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RadiusAuthBackend resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend.RadiusAuthBackend;

RadiusAuthBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend.RadiusAuthBackend;

RadiusAuthBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend.RadiusAuthBackend;

RadiusAuthBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend.RadiusAuthBackend;

RadiusAuthBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RadiusAuthBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RadiusAuthBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RadiusAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RadiusAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RadiusAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasIdentifier">nasIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadataInput">aliasMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeoutInput">dialTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPortInput">nasPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeoutInput">readTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoInput">secretWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersionInput">secretWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPoliciesInput">unregisteredUserPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeout">dialTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPort">nasPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeout">readTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWo">secretWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersion">secretWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPolicies">unregisteredUserPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `nasIdentifier`<sup>Required</sup> <a name="nasIdentifier" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasIdentifier"></a>

```java
public java.lang.String getNasIdentifier();
```

- *Type:* java.lang.String

---

##### `aliasMetadataInput`<sup>Optional</sup> <a name="aliasMetadataInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dialTimeoutInput`<sup>Optional</sup> <a name="dialTimeoutInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeoutInput"></a>

```java
public java.lang.Number getDialTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `nasPortInput`<sup>Optional</sup> <a name="nasPortInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPortInput"></a>

```java
public java.lang.Number getNasPortInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `readTimeoutInput`<sup>Optional</sup> <a name="readTimeoutInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeoutInput"></a>

```java
public java.lang.Number getReadTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `secretWoInput`<sup>Optional</sup> <a name="secretWoInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoInput"></a>

```java
public java.lang.String getSecretWoInput();
```

- *Type:* java.lang.String

---

##### `secretWoVersionInput`<sup>Optional</sup> <a name="secretWoVersionInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersionInput"></a>

```java
public java.lang.Number getSecretWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `unregisteredUserPoliciesInput`<sup>Optional</sup> <a name="unregisteredUserPoliciesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getUnregisteredUserPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dialTimeout`<sup>Required</sup> <a name="dialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeout"></a>

```java
public java.lang.Number getDialTimeout();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `nasPort`<sup>Required</sup> <a name="nasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPort"></a>

```java
public java.lang.Number getNasPort();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `readTimeout`<sup>Required</sup> <a name="readTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeout"></a>

```java
public java.lang.Number getReadTimeout();
```

- *Type:* java.lang.Number

---

##### `secretWo`<sup>Required</sup> <a name="secretWo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWo"></a>

```java
public java.lang.String getSecretWo();
```

- *Type:* java.lang.String

---

##### `secretWoVersion`<sup>Required</sup> <a name="secretWoVersion" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersion"></a>

```java
public java.lang.Number getSecretWoVersion();
```

- *Type:* java.lang.Number

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `unregisteredUserPolicies`<sup>Required</sup> <a name="unregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPolicies"></a>

```java
public java.util.List<java.lang.String> getUnregisteredUserPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RadiusAuthBackendConfig <a name="RadiusAuthBackendConfig" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.radius_auth_backend.RadiusAuthBackendConfig;

RadiusAuthBackendConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .host(java.lang.String)
    .mount(java.lang.String)
    .secretWo(java.lang.String)
    .secretWoVersion(java.lang.Number)
//  .aliasMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .dialTimeout(java.lang.Number)
//  .namespace(java.lang.String)
//  .nasPort(java.lang.Number)
//  .port(java.lang.Number)
//  .readTimeout(java.lang.Number)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
//  .unregisteredUserPolicies(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.host">host</a></code> | <code>java.lang.String</code> | The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path of the enabled RADIUS auth backend mount to configure. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWo">secretWo</a></code> | <code>java.lang.String</code> | The RADIUS shared secret. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWoVersion">secretWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for the write-only `secret_wo` field. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dialTimeout">dialTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait for a backend connection before timing out. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.nasPort">nasPort</a></code> | <code>java.lang.Number</code> | The NAS-Port attribute of the RADIUS request. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The UDP port where the RADIUS server is listening on. Defaults to `1812`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.readTimeout">readTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait for a response from the RADIUS server. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.unregisteredUserPolicies">unregisteredUserPolicies</a></code> | <code>java.util.List<java.lang.String></code> | A set of policies to be granted to unregistered users. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#host RadiusAuthBackend#host}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path of the enabled RADIUS auth backend mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#mount RadiusAuthBackend#mount}

---

##### `secretWo`<sup>Required</sup> <a name="secretWo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWo"></a>

```java
public java.lang.String getSecretWo();
```

- *Type:* java.lang.String

The RADIUS shared secret. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#secret_wo RadiusAuthBackend#secret_wo}

---

##### `secretWoVersion`<sup>Required</sup> <a name="secretWoVersion" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWoVersion"></a>

```java
public java.lang.Number getSecretWoVersion();
```

- *Type:* java.lang.Number

Version counter for the write-only `secret_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the secret changes. Increment this value whenever you update `secret_wo` so Terraform detects the change and applies an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#secret_wo_version RadiusAuthBackend#secret_wo_version}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.aliasMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#alias_metadata RadiusAuthBackend#alias_metadata}

---

##### `dialTimeout`<sup>Optional</sup> <a name="dialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dialTimeout"></a>

```java
public java.lang.Number getDialTimeout();
```

- *Type:* java.lang.Number

Number of seconds to wait for a backend connection before timing out.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#dial_timeout RadiusAuthBackend#dial_timeout}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#namespace RadiusAuthBackend#namespace}

---

##### `nasPort`<sup>Optional</sup> <a name="nasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.nasPort"></a>

```java
public java.lang.Number getNasPort();
```

- *Type:* java.lang.Number

The NAS-Port attribute of the RADIUS request.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#nas_port RadiusAuthBackend#nas_port}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The UDP port where the RADIUS server is listening on. Defaults to `1812`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#port RadiusAuthBackend#port}

---

##### `readTimeout`<sup>Optional</sup> <a name="readTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.readTimeout"></a>

```java
public java.lang.Number getReadTimeout();
```

- *Type:* java.lang.Number

Number of seconds to wait for a response from the RADIUS server.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#read_timeout RadiusAuthBackend#read_timeout}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_bound_cidrs RadiusAuthBackend#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_explicit_max_ttl RadiusAuthBackend#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_max_ttl RadiusAuthBackend#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_no_default_policy RadiusAuthBackend#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_num_uses RadiusAuthBackend#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_period RadiusAuthBackend#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_policies RadiusAuthBackend#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_ttl RadiusAuthBackend#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_type RadiusAuthBackend#token_type}

---

##### `unregisteredUserPolicies`<sup>Optional</sup> <a name="unregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.unregisteredUserPolicies"></a>

```java
public java.util.List<java.lang.String> getUnregisteredUserPolicies();
```

- *Type:* java.util.List<java.lang.String>

A set of policies to be granted to unregistered users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#unregistered_user_policies RadiusAuthBackend#unregistered_user_policies}

---



