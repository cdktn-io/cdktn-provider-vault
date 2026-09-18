# `ephemeralVaultAzureAccessToken` Submodule <a name="`ephemeralVaultAzureAccessToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAzureAccessToken <a name="EphemeralVaultAzureAccessToken" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token vault_azure_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_access_token.EphemeralVaultAzureAccessToken;

EphemeralVaultAzureAccessToken.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .mount(java.lang.String)
    .role(java.lang.String)
    .scope(java.lang.String)
//  .maxRetries(java.lang.Number)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .retryDelay(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the Azure secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Static role name to fetch an access token for. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default"). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.retryDelay">retryDelay</a></code> | <code>java.lang.Number</code> | Number of seconds to wait between propagation retries. Defaults to 4. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Mount path for the Azure secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount EphemeralVaultAzureAccessToken#mount}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Static role name to fetch an access token for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#role EphemeralVaultAzureAccessToken#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#scope EphemeralVaultAzureAccessToken#scope}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#max_retries EphemeralVaultAzureAccessToken#max_retries}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount_id EphemeralVaultAzureAccessToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#namespace EphemeralVaultAzureAccessToken#namespace}

---

##### `retryDelay`<sup>Optional</sup> <a name="retryDelay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.Initializer.parameter.retryDelay"></a>

- *Type:* java.lang.Number

Number of seconds to wait between propagation retries. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#retry_delay EphemeralVaultAzureAccessToken#retry_delay}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetRetryDelay">resetRetryDelay</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRetryDelay` <a name="resetRetryDelay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.resetRetryDelay"></a>

```java
public void resetRetryDelay()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_access_token.EphemeralVaultAzureAccessToken;

EphemeralVaultAzureAccessToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_access_token.EphemeralVaultAzureAccessToken;

EphemeralVaultAzureAccessToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_access_token.EphemeralVaultAzureAccessToken;

EphemeralVaultAzureAccessToken.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.expiresIn">expiresIn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.extExpiresIn">extExpiresIn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelayInput">retryDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelay">retryDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `expiresIn`<sup>Required</sup> <a name="expiresIn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.expiresIn"></a>

```java
public java.lang.Number getExpiresIn();
```

- *Type:* java.lang.Number

---

##### `extExpiresIn`<sup>Required</sup> <a name="extExpiresIn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.extExpiresIn"></a>

```java
public java.lang.Number getExtExpiresIn();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `retryDelayInput`<sup>Optional</sup> <a name="retryDelayInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelayInput"></a>

```java
public java.lang.Number getRetryDelayInput();
```

- *Type:* java.lang.Number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `retryDelay`<sup>Required</sup> <a name="retryDelay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.retryDelay"></a>

```java
public java.lang.Number getRetryDelay();
```

- *Type:* java.lang.Number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAzureAccessTokenConfig <a name="EphemeralVaultAzureAccessTokenConfig" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_access_token.EphemeralVaultAzureAccessTokenConfig;

EphemeralVaultAzureAccessTokenConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .mount(java.lang.String)
    .role(java.lang.String)
    .scope(java.lang.String)
//  .maxRetries(java.lang.Number)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .retryDelay(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the Azure secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.role">role</a></code> | <code>java.lang.String</code> | Static role name to fetch an access token for. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default"). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.retryDelay">retryDelay</a></code> | <code>java.lang.Number</code> | Number of seconds to wait between propagation retries. Defaults to 4. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Mount path for the Azure secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount EphemeralVaultAzureAccessToken#mount}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Static role name to fetch an access token for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#role EphemeralVaultAzureAccessToken#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The Azure OAuth2 scope to request the access token for (e.g. "https://graph.microsoft.com/.default").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#scope EphemeralVaultAzureAccessToken#scope}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Maximum number of retries when waiting for the Azure AD credential to propagate. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#max_retries EphemeralVaultAzureAccessToken#max_retries}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#mount_id EphemeralVaultAzureAccessToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#namespace EphemeralVaultAzureAccessToken#namespace}

---

##### `retryDelay`<sup>Optional</sup> <a name="retryDelay" id="@cdktn/provider-vault.ephemeralVaultAzureAccessToken.EphemeralVaultAzureAccessTokenConfig.property.retryDelay"></a>

```java
public java.lang.Number getRetryDelay();
```

- *Type:* java.lang.Number

Number of seconds to wait between propagation retries. Defaults to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/ephemeral-resources/azure_access_token#retry_delay EphemeralVaultAzureAccessToken#retry_delay}

---



