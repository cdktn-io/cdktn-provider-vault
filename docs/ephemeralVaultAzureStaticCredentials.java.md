# `ephemeralVaultAzureStaticCredentials` Submodule <a name="`ephemeralVaultAzureStaticCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAzureStaticCredentials <a name="EphemeralVaultAzureStaticCredentials" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_static_credentials vault_azure_static_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_static_credentials.EphemeralVaultAzureStaticCredentials;

EphemeralVaultAzureStaticCredentials.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .backend(java.lang.String)
    .role(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .requestMetadata(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Static role name to fetch credentials for. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.requestMetadata">requestMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input metadata to send with the request to Vault. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_static_credentials#backend EphemeralVaultAzureStaticCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Static role name to fetch credentials for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_static_credentials#role EphemeralVaultAzureStaticCredentials#role}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_static_credentials#mount_id EphemeralVaultAzureStaticCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_static_credentials#namespace EphemeralVaultAzureStaticCredentials#namespace}

---

##### `requestMetadata`<sup>Optional</sup> <a name="requestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.Initializer.parameter.requestMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input metadata to send with the request to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_static_credentials#request_metadata EphemeralVaultAzureStaticCredentials#request_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetRequestMetadata">resetRequestMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRequestMetadata` <a name="resetRequestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.resetRequestMetadata"></a>

```java
public void resetRequestMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_static_credentials.EphemeralVaultAzureStaticCredentials;

EphemeralVaultAzureStaticCredentials.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_static_credentials.EphemeralVaultAzureStaticCredentials;

EphemeralVaultAzureStaticCredentials.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_static_credentials.EphemeralVaultAzureStaticCredentials;

EphemeralVaultAzureStaticCredentials.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.expiration">expiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.metadata">metadata</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadataInput">requestMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadata">requestMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `requestMetadataInput`<sup>Optional</sup> <a name="requestMetadataInput" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `requestMetadata`<sup>Required</sup> <a name="requestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.requestMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentials.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAzureStaticCredentialsConfig <a name="EphemeralVaultAzureStaticCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_static_credentials.EphemeralVaultAzureStaticCredentialsConfig;

EphemeralVaultAzureStaticCredentialsConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .backend(java.lang.String)
    .role(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .requestMetadata(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.role">role</a></code> | <code>java.lang.String</code> | Static role name to fetch credentials for. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.requestMetadata">requestMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input metadata to send with the request to Vault. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_static_credentials#backend EphemeralVaultAzureStaticCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Static role name to fetch credentials for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_static_credentials#role EphemeralVaultAzureStaticCredentials#role}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_static_credentials#mount_id EphemeralVaultAzureStaticCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_static_credentials#namespace EphemeralVaultAzureStaticCredentials#namespace}

---

##### `requestMetadata`<sup>Optional</sup> <a name="requestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureStaticCredentials.EphemeralVaultAzureStaticCredentialsConfig.property.requestMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input metadata to send with the request to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_static_credentials#request_metadata EphemeralVaultAzureStaticCredentials#request_metadata}

---



