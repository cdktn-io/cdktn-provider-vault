# `dataVaultIdentityOidcPublicKeys` Submodule <a name="`dataVaultIdentityOidcPublicKeys` Submodule" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityOidcPublicKeys <a name="DataVaultIdentityOidcPublicKeys" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/identity_oidc_public_keys vault_identity_oidc_public_keys}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_identity_oidc_public_keys.DataVaultIdentityOidcPublicKeys;

DataVaultIdentityOidcPublicKeys.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the provider. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/identity_oidc_public_keys#id DataVaultIdentityOidcPublicKeys#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/identity_oidc_public_keys#name DataVaultIdentityOidcPublicKeys#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/identity_oidc_public_keys#id DataVaultIdentityOidcPublicKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/identity_oidc_public_keys#namespace DataVaultIdentityOidcPublicKeys#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultIdentityOidcPublicKeys resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isConstruct"></a>

```java
import io.cdktn.providers.vault.data_vault_identity_oidc_public_keys.DataVaultIdentityOidcPublicKeys;

DataVaultIdentityOidcPublicKeys.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.data_vault_identity_oidc_public_keys.DataVaultIdentityOidcPublicKeys;

DataVaultIdentityOidcPublicKeys.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformDataSource"></a>

```java
import io.cdktn.providers.vault.data_vault_identity_oidc_public_keys.DataVaultIdentityOidcPublicKeys;

DataVaultIdentityOidcPublicKeys.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.data_vault_identity_oidc_public_keys.DataVaultIdentityOidcPublicKeys;

DataVaultIdentityOidcPublicKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultIdentityOidcPublicKeys.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataVaultIdentityOidcPublicKeys resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultIdentityOidcPublicKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultIdentityOidcPublicKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/identity_oidc_public_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityOidcPublicKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.keys">keys</a></code> | <code>io.cdktn.cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.keys"></a>

```java
public StringMapList getKeys();
```

- *Type:* io.cdktn.cdktn.StringMapList

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeys.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityOidcPublicKeysConfig <a name="DataVaultIdentityOidcPublicKeysConfig" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_identity_oidc_public_keys.DataVaultIdentityOidcPublicKeysConfig;

DataVaultIdentityOidcPublicKeysConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the provider. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/identity_oidc_public_keys#id DataVaultIdentityOidcPublicKeys#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/identity_oidc_public_keys#name DataVaultIdentityOidcPublicKeys#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/identity_oidc_public_keys#id DataVaultIdentityOidcPublicKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultIdentityOidcPublicKeys.DataVaultIdentityOidcPublicKeysConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/identity_oidc_public_keys#namespace DataVaultIdentityOidcPublicKeys#namespace}

---



