# `ephemeralVaultGcpOauth2AccessToken` Submodule <a name="`ephemeralVaultGcpOauth2AccessToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpOauth2AccessToken <a name="EphemeralVaultGcpOauth2AccessToken" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token vault_gcp_oauth2_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcp_oauth2_access_token.EphemeralVaultGcpOauth2AccessToken;

EphemeralVaultGcpOauth2AccessToken.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .mount(java.lang.String)
//  .impersonatedAccount(java.lang.String)
//  .maxRetries(java.lang.Number)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .roleset(java.lang.String)
//  .staticAccount(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.impersonatedAccount">impersonatedAccount</a></code> | <code>java.lang.String</code> | GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Maximum number of retries when the GCP service account or key is not yet ready. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.roleset">roleset</a></code> | <code>java.lang.String</code> | GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.staticAccount">staticAccount</a></code> | <code>java.lang.String</code> | GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#mount EphemeralVaultGcpOauth2AccessToken#mount}

---

##### `impersonatedAccount`<sup>Optional</sup> <a name="impersonatedAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.impersonatedAccount"></a>

- *Type:* java.lang.String

GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#impersonated_account EphemeralVaultGcpOauth2AccessToken#impersonated_account}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

Maximum number of retries when the GCP service account or key is not yet ready.

Each retry waits 1 second. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#max_retries EphemeralVaultGcpOauth2AccessToken#max_retries}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#mount_id EphemeralVaultGcpOauth2AccessToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#namespace EphemeralVaultGcpOauth2AccessToken#namespace}

---

##### `roleset`<sup>Optional</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.roleset"></a>

- *Type:* java.lang.String

GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#roleset EphemeralVaultGcpOauth2AccessToken#roleset}

---

##### `staticAccount`<sup>Optional</sup> <a name="staticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.staticAccount"></a>

- *Type:* java.lang.String

GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#static_account EphemeralVaultGcpOauth2AccessToken#static_account}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetImpersonatedAccount">resetImpersonatedAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetRoleset">resetRoleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetStaticAccount">resetStaticAccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetImpersonatedAccount` <a name="resetImpersonatedAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetImpersonatedAccount"></a>

```java
public void resetImpersonatedAccount()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRoleset` <a name="resetRoleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetRoleset"></a>

```java
public void resetRoleset()
```

##### `resetStaticAccount` <a name="resetStaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetStaticAccount"></a>

```java
public void resetStaticAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcp_oauth2_access_token.EphemeralVaultGcpOauth2AccessToken;

EphemeralVaultGcpOauth2AccessToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcp_oauth2_access_token.EphemeralVaultGcpOauth2AccessToken;

EphemeralVaultGcpOauth2AccessToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcp_oauth2_access_token.EphemeralVaultGcpOauth2AccessToken;

EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseId">leaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseRenewable">leaseRenewable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseStartTime">leaseStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccountInput">impersonatedAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.rolesetInput">rolesetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccountInput">staticAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccount">impersonatedAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.roleset">roleset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccount">staticAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseId"></a>

```java
public java.lang.String getLeaseId();
```

- *Type:* java.lang.String

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseRenewable"></a>

```java
public IResolvable getLeaseRenewable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseStartTime"></a>

```java
public java.lang.String getLeaseStartTime();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `impersonatedAccountInput`<sup>Optional</sup> <a name="impersonatedAccountInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccountInput"></a>

```java
public java.lang.String getImpersonatedAccountInput();
```

- *Type:* java.lang.String

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `rolesetInput`<sup>Optional</sup> <a name="rolesetInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.rolesetInput"></a>

```java
public java.lang.String getRolesetInput();
```

- *Type:* java.lang.String

---

##### `staticAccountInput`<sup>Optional</sup> <a name="staticAccountInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccountInput"></a>

```java
public java.lang.String getStaticAccountInput();
```

- *Type:* java.lang.String

---

##### `impersonatedAccount`<sup>Required</sup> <a name="impersonatedAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccount"></a>

```java
public java.lang.String getImpersonatedAccount();
```

- *Type:* java.lang.String

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.roleset"></a>

```java
public java.lang.String getRoleset();
```

- *Type:* java.lang.String

---

##### `staticAccount`<sup>Required</sup> <a name="staticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccount"></a>

```java
public java.lang.String getStaticAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpOauth2AccessTokenConfig <a name="EphemeralVaultGcpOauth2AccessTokenConfig" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcp_oauth2_access_token.EphemeralVaultGcpOauth2AccessTokenConfig;

EphemeralVaultGcpOauth2AccessTokenConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .mount(java.lang.String)
//  .impersonatedAccount(java.lang.String)
//  .maxRetries(java.lang.Number)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .roleset(java.lang.String)
//  .staticAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.impersonatedAccount">impersonatedAccount</a></code> | <code>java.lang.String</code> | GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Maximum number of retries when the GCP service account or key is not yet ready. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.roleset">roleset</a></code> | <code>java.lang.String</code> | GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.staticAccount">staticAccount</a></code> | <code>java.lang.String</code> | GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#mount EphemeralVaultGcpOauth2AccessToken#mount}

---

##### `impersonatedAccount`<sup>Optional</sup> <a name="impersonatedAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.impersonatedAccount"></a>

```java
public java.lang.String getImpersonatedAccount();
```

- *Type:* java.lang.String

GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#impersonated_account EphemeralVaultGcpOauth2AccessToken#impersonated_account}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Maximum number of retries when the GCP service account or key is not yet ready.

Each retry waits 1 second. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#max_retries EphemeralVaultGcpOauth2AccessToken#max_retries}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#mount_id EphemeralVaultGcpOauth2AccessToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#namespace EphemeralVaultGcpOauth2AccessToken#namespace}

---

##### `roleset`<sup>Optional</sup> <a name="roleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.roleset"></a>

```java
public java.lang.String getRoleset();
```

- *Type:* java.lang.String

GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#roleset EphemeralVaultGcpOauth2AccessToken#roleset}

---

##### `staticAccount`<sup>Optional</sup> <a name="staticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.staticAccount"></a>

```java
public java.lang.String getStaticAccount();
```

- *Type:* java.lang.String

GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_oauth2_access_token#static_account EphemeralVaultGcpOauth2AccessToken#static_account}

---



