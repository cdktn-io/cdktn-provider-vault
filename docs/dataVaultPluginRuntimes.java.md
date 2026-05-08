# `dataVaultPluginRuntimes` Submodule <a name="`dataVaultPluginRuntimes` Submodule" id="@cdktn/provider-vault.dataVaultPluginRuntimes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPluginRuntimes <a name="DataVaultPluginRuntimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/plugin_runtimes vault_plugin_runtimes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_plugin_runtimes.DataVaultPluginRuntimes;

DataVaultPluginRuntimes.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .namespace(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Specifies the plugin runtime type to list. Currently only `container` is supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/plugin_runtimes#namespace DataVaultPluginRuntimes#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Specifies the plugin runtime type to list. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/plugin_runtimes#type DataVaultPluginRuntimes#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultPluginRuntimes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct"></a>

```java
import io.cdktn.providers.vault.data_vault_plugin_runtimes.DataVaultPluginRuntimes;

DataVaultPluginRuntimes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.data_vault_plugin_runtimes.DataVaultPluginRuntimes;

DataVaultPluginRuntimes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource"></a>

```java
import io.cdktn.providers.vault.data_vault_plugin_runtimes.DataVaultPluginRuntimes;

DataVaultPluginRuntimes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.data_vault_plugin_runtimes.DataVaultPluginRuntimes;

DataVaultPluginRuntimes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultPluginRuntimes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataVaultPluginRuntimes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultPluginRuntimes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultPluginRuntimes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/plugin_runtimes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultPluginRuntimes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.runtimes">runtimes</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList">DataVaultPluginRuntimesRuntimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `runtimes`<sup>Required</sup> <a name="runtimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.runtimes"></a>

```java
public DataVaultPluginRuntimesRuntimesList getRuntimes();
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList">DataVaultPluginRuntimesRuntimesList</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPluginRuntimesConfig <a name="DataVaultPluginRuntimesConfig" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_plugin_runtimes.DataVaultPluginRuntimesConfig;

DataVaultPluginRuntimesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .namespace(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.type">type</a></code> | <code>java.lang.String</code> | Specifies the plugin runtime type to list. Currently only `container` is supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/plugin_runtimes#namespace DataVaultPluginRuntimes#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies the plugin runtime type to list. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/data-sources/plugin_runtimes#type DataVaultPluginRuntimes#type}

---

### DataVaultPluginRuntimesRuntimes <a name="DataVaultPluginRuntimesRuntimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_plugin_runtimes.DataVaultPluginRuntimesRuntimes;

DataVaultPluginRuntimesRuntimes.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataVaultPluginRuntimesRuntimesList <a name="DataVaultPluginRuntimesRuntimesList" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_plugin_runtimes.DataVaultPluginRuntimesRuntimesList;

new DataVaultPluginRuntimesRuntimesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get"></a>

```java
public DataVaultPluginRuntimesRuntimesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataVaultPluginRuntimesRuntimesOutputReference <a name="DataVaultPluginRuntimesRuntimesOutputReference" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.vault.data_vault_plugin_runtimes.DataVaultPluginRuntimesRuntimesOutputReference;

new DataVaultPluginRuntimesRuntimesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cgroupParent">cgroupParent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cpuNanos">cpuNanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.memoryBytes">memoryBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.ociRuntime">ociRuntime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.rootless">rootless</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes">DataVaultPluginRuntimesRuntimes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cgroupParent`<sup>Required</sup> <a name="cgroupParent" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cgroupParent"></a>

```java
public java.lang.String getCgroupParent();
```

- *Type:* java.lang.String

---

##### `cpuNanos`<sup>Required</sup> <a name="cpuNanos" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cpuNanos"></a>

```java
public java.lang.Number getCpuNanos();
```

- *Type:* java.lang.Number

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.memoryBytes"></a>

```java
public java.lang.Number getMemoryBytes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ociRuntime`<sup>Required</sup> <a name="ociRuntime" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.ociRuntime"></a>

```java
public java.lang.String getOciRuntime();
```

- *Type:* java.lang.String

---

##### `rootless`<sup>Required</sup> <a name="rootless" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.rootless"></a>

```java
public IResolvable getRootless();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.internalValue"></a>

```java
public DataVaultPluginRuntimesRuntimes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes">DataVaultPluginRuntimesRuntimes</a>

---



