# `spiffeSecretBackendConfig` Submodule <a name="`spiffeSecretBackendConfig` Submodule" id="@cdktn/provider-vault.spiffeSecretBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeSecretBackendConfig <a name="SpiffeSecretBackendConfig" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config vault_spiffe_secret_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.spiffe_secret_backend_config.SpiffeSecretBackendConfig;

SpiffeSecretBackendConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .trustDomain(java.lang.String)
//  .bundleRefreshHint(java.lang.String)
//  .jwtIssuerUrl(java.lang.String)
//  .jwtOidcCompatibilityMode(java.lang.Boolean|IResolvable)
//  .jwtSigningAlgorithm(java.lang.String)
//  .keyLifetime(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.trustDomain">trustDomain</a></code> | <code>java.lang.String</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.bundleRefreshHint">bundleRefreshHint</a></code> | <code>java.lang.String</code> | Refresh hint to use in trust bundles. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtIssuerUrl">jwtIssuerUrl</a></code> | <code>java.lang.String</code> | Base URL to use for JWT iss claim. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtOidcCompatibilityMode">jwtOidcCompatibilityMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtSigningAlgorithm">jwtSigningAlgorithm</a></code> | <code>java.lang.String</code> | Signing algorithm to use for JWTs. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.keyLifetime">keyLifetime</a></code> | <code>java.lang.String</code> | How long a signing key will live for once it starts being used to sign. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#mount SpiffeSecretBackendConfig#mount}

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.trustDomain"></a>

- *Type:* java.lang.String

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#trust_domain SpiffeSecretBackendConfig#trust_domain}

---

##### `bundleRefreshHint`<sup>Optional</sup> <a name="bundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.bundleRefreshHint"></a>

- *Type:* java.lang.String

Refresh hint to use in trust bundles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#bundle_refresh_hint SpiffeSecretBackendConfig#bundle_refresh_hint}

---

##### `jwtIssuerUrl`<sup>Optional</sup> <a name="jwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtIssuerUrl"></a>

- *Type:* java.lang.String

Base URL to use for JWT iss claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#jwt_issuer_url SpiffeSecretBackendConfig#jwt_issuer_url}

---

##### `jwtOidcCompatibilityMode`<sup>Optional</sup> <a name="jwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtOidcCompatibilityMode"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#jwt_oidc_compatibility_mode SpiffeSecretBackendConfig#jwt_oidc_compatibility_mode}

---

##### `jwtSigningAlgorithm`<sup>Optional</sup> <a name="jwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.jwtSigningAlgorithm"></a>

- *Type:* java.lang.String

Signing algorithm to use for JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#jwt_signing_algorithm SpiffeSecretBackendConfig#jwt_signing_algorithm}

---

##### `keyLifetime`<sup>Optional</sup> <a name="keyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.keyLifetime"></a>

- *Type:* java.lang.String

How long a signing key will live for once it starts being used to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#key_lifetime SpiffeSecretBackendConfig#key_lifetime}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#namespace SpiffeSecretBackendConfig#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetBundleRefreshHint">resetBundleRefreshHint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtIssuerUrl">resetJwtIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtOidcCompatibilityMode">resetJwtOidcCompatibilityMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtSigningAlgorithm">resetJwtSigningAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetKeyLifetime">resetKeyLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBundleRefreshHint` <a name="resetBundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetBundleRefreshHint"></a>

```java
public void resetBundleRefreshHint()
```

##### `resetJwtIssuerUrl` <a name="resetJwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtIssuerUrl"></a>

```java
public void resetJwtIssuerUrl()
```

##### `resetJwtOidcCompatibilityMode` <a name="resetJwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtOidcCompatibilityMode"></a>

```java
public void resetJwtOidcCompatibilityMode()
```

##### `resetJwtSigningAlgorithm` <a name="resetJwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtSigningAlgorithm"></a>

```java
public void resetJwtSigningAlgorithm()
```

##### `resetKeyLifetime` <a name="resetKeyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetKeyLifetime"></a>

```java
public void resetKeyLifetime()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SpiffeSecretBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct"></a>

```java
import io.cdktn.providers.vault.spiffe_secret_backend_config.SpiffeSecretBackendConfig;

SpiffeSecretBackendConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.spiffe_secret_backend_config.SpiffeSecretBackendConfig;

SpiffeSecretBackendConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.spiffe_secret_backend_config.SpiffeSecretBackendConfig;

SpiffeSecretBackendConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.spiffe_secret_backend_config.SpiffeSecretBackendConfig;

SpiffeSecretBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpiffeSecretBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SpiffeSecretBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpiffeSecretBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpiffeSecretBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SpiffeSecretBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHintInput">bundleRefreshHintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrlInput">jwtIssuerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityModeInput">jwtOidcCompatibilityModeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithmInput">jwtSigningAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetimeInput">keyLifetimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomainInput">trustDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHint">bundleRefreshHint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrl">jwtIssuerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityMode">jwtOidcCompatibilityMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithm">jwtSigningAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetime">keyLifetime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomain">trustDomain</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bundleRefreshHintInput`<sup>Optional</sup> <a name="bundleRefreshHintInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHintInput"></a>

```java
public java.lang.String getBundleRefreshHintInput();
```

- *Type:* java.lang.String

---

##### `jwtIssuerUrlInput`<sup>Optional</sup> <a name="jwtIssuerUrlInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrlInput"></a>

```java
public java.lang.String getJwtIssuerUrlInput();
```

- *Type:* java.lang.String

---

##### `jwtOidcCompatibilityModeInput`<sup>Optional</sup> <a name="jwtOidcCompatibilityModeInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityModeInput"></a>

```java
public java.lang.Boolean|IResolvable getJwtOidcCompatibilityModeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `jwtSigningAlgorithmInput`<sup>Optional</sup> <a name="jwtSigningAlgorithmInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithmInput"></a>

```java
public java.lang.String getJwtSigningAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `keyLifetimeInput`<sup>Optional</sup> <a name="keyLifetimeInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetimeInput"></a>

```java
public java.lang.String getKeyLifetimeInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `trustDomainInput`<sup>Optional</sup> <a name="trustDomainInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomainInput"></a>

```java
public java.lang.String getTrustDomainInput();
```

- *Type:* java.lang.String

---

##### `bundleRefreshHint`<sup>Required</sup> <a name="bundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHint"></a>

```java
public java.lang.String getBundleRefreshHint();
```

- *Type:* java.lang.String

---

##### `jwtIssuerUrl`<sup>Required</sup> <a name="jwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrl"></a>

```java
public java.lang.String getJwtIssuerUrl();
```

- *Type:* java.lang.String

---

##### `jwtOidcCompatibilityMode`<sup>Required</sup> <a name="jwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityMode"></a>

```java
public java.lang.Boolean|IResolvable getJwtOidcCompatibilityMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `jwtSigningAlgorithm`<sup>Required</sup> <a name="jwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithm"></a>

```java
public java.lang.String getJwtSigningAlgorithm();
```

- *Type:* java.lang.String

---

##### `keyLifetime`<sup>Required</sup> <a name="keyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetime"></a>

```java
public java.lang.String getKeyLifetime();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomain"></a>

```java
public java.lang.String getTrustDomain();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeSecretBackendConfigConfig <a name="SpiffeSecretBackendConfigConfig" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.spiffe_secret_backend_config.SpiffeSecretBackendConfigConfig;

SpiffeSecretBackendConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .trustDomain(java.lang.String)
//  .bundleRefreshHint(java.lang.String)
//  .jwtIssuerUrl(java.lang.String)
//  .jwtOidcCompatibilityMode(java.lang.Boolean|IResolvable)
//  .jwtSigningAlgorithm(java.lang.String)
//  .keyLifetime(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.trustDomain">trustDomain</a></code> | <code>java.lang.String</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.bundleRefreshHint">bundleRefreshHint</a></code> | <code>java.lang.String</code> | Refresh hint to use in trust bundles. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtIssuerUrl">jwtIssuerUrl</a></code> | <code>java.lang.String</code> | Base URL to use for JWT iss claim. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtOidcCompatibilityMode">jwtOidcCompatibilityMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtSigningAlgorithm">jwtSigningAlgorithm</a></code> | <code>java.lang.String</code> | Signing algorithm to use for JWTs. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.keyLifetime">keyLifetime</a></code> | <code>java.lang.String</code> | How long a signing key will live for once it starts being used to sign. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#mount SpiffeSecretBackendConfig#mount}

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.trustDomain"></a>

```java
public java.lang.String getTrustDomain();
```

- *Type:* java.lang.String

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#trust_domain SpiffeSecretBackendConfig#trust_domain}

---

##### `bundleRefreshHint`<sup>Optional</sup> <a name="bundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.bundleRefreshHint"></a>

```java
public java.lang.String getBundleRefreshHint();
```

- *Type:* java.lang.String

Refresh hint to use in trust bundles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#bundle_refresh_hint SpiffeSecretBackendConfig#bundle_refresh_hint}

---

##### `jwtIssuerUrl`<sup>Optional</sup> <a name="jwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtIssuerUrl"></a>

```java
public java.lang.String getJwtIssuerUrl();
```

- *Type:* java.lang.String

Base URL to use for JWT iss claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#jwt_issuer_url SpiffeSecretBackendConfig#jwt_issuer_url}

---

##### `jwtOidcCompatibilityMode`<sup>Optional</sup> <a name="jwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtOidcCompatibilityMode"></a>

```java
public java.lang.Boolean|IResolvable getJwtOidcCompatibilityMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#jwt_oidc_compatibility_mode SpiffeSecretBackendConfig#jwt_oidc_compatibility_mode}

---

##### `jwtSigningAlgorithm`<sup>Optional</sup> <a name="jwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtSigningAlgorithm"></a>

```java
public java.lang.String getJwtSigningAlgorithm();
```

- *Type:* java.lang.String

Signing algorithm to use for JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#jwt_signing_algorithm SpiffeSecretBackendConfig#jwt_signing_algorithm}

---

##### `keyLifetime`<sup>Optional</sup> <a name="keyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.keyLifetime"></a>

```java
public java.lang.String getKeyLifetime();
```

- *Type:* java.lang.String

How long a signing key will live for once it starts being used to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#key_lifetime SpiffeSecretBackendConfig#key_lifetime}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#namespace SpiffeSecretBackendConfig#namespace}

---



