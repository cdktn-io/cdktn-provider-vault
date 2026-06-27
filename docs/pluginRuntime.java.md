# `pluginRuntime` Submodule <a name="`pluginRuntime` Submodule" id="@cdktn/provider-vault.pluginRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PluginRuntime <a name="PluginRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime vault_plugin_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer"></a>

```java
import io.cdktn.providers.vault.plugin_runtime.PluginRuntime;

PluginRuntime.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .cgroupParent(java.lang.String)
//  .cpuNanos(java.lang.Number)
//  .memoryBytes(java.lang.Number)
//  .namespace(java.lang.String)
//  .ociRuntime(java.lang.String)
//  .rootless(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the plugin runtime. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Specifies the plugin runtime type. Currently only `container` is supported. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.cgroupParent">cgroupParent</a></code> | <code>java.lang.String</code> | Specifies the parent cgroup to set for each container. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.cpuNanos">cpuNanos</a></code> | <code>java.lang.Number</code> | Specifies CPU limit to set per container in billionths of a CPU. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.memoryBytes">memoryBytes</a></code> | <code>java.lang.Number</code> | Specifies memory limit to set per container in bytes. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.ociRuntime">ociRuntime</a></code> | <code>java.lang.String</code> | Specifies OCI-compliant container runtime to use. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.rootless">rootless</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the container runtime is running as a non-privileged user. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the plugin runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#name PluginRuntime#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Specifies the plugin runtime type. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#type PluginRuntime#type}

---

##### `cgroupParent`<sup>Optional</sup> <a name="cgroupParent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.cgroupParent"></a>

- *Type:* java.lang.String

Specifies the parent cgroup to set for each container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#cgroup_parent PluginRuntime#cgroup_parent}

---

##### `cpuNanos`<sup>Optional</sup> <a name="cpuNanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.cpuNanos"></a>

- *Type:* java.lang.Number

Specifies CPU limit to set per container in billionths of a CPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#cpu_nanos PluginRuntime#cpu_nanos}

---

##### `memoryBytes`<sup>Optional</sup> <a name="memoryBytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.memoryBytes"></a>

- *Type:* java.lang.Number

Specifies memory limit to set per container in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#memory_bytes PluginRuntime#memory_bytes}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#namespace PluginRuntime#namespace}

---

##### `ociRuntime`<sup>Optional</sup> <a name="ociRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.ociRuntime"></a>

- *Type:* java.lang.String

Specifies OCI-compliant container runtime to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#oci_runtime PluginRuntime#oci_runtime}

---

##### `rootless`<sup>Optional</sup> <a name="rootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.rootless"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the container runtime is running as a non-privileged user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#rootless PluginRuntime#rootless}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCgroupParent">resetCgroupParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCpuNanos">resetCpuNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetMemoryBytes">resetMemoryBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOciRuntime">resetOciRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetRootless">resetRootless</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCgroupParent` <a name="resetCgroupParent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCgroupParent"></a>

```java
public void resetCgroupParent()
```

##### `resetCpuNanos` <a name="resetCpuNanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCpuNanos"></a>

```java
public void resetCpuNanos()
```

##### `resetMemoryBytes` <a name="resetMemoryBytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetMemoryBytes"></a>

```java
public void resetMemoryBytes()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOciRuntime` <a name="resetOciRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOciRuntime"></a>

```java
public void resetOciRuntime()
```

##### `resetRootless` <a name="resetRootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetRootless"></a>

```java
public void resetRootless()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PluginRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct"></a>

```java
import io.cdktn.providers.vault.plugin_runtime.PluginRuntime;

PluginRuntime.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.plugin_runtime.PluginRuntime;

PluginRuntime.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.plugin_runtime.PluginRuntime;

PluginRuntime.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.plugin_runtime.PluginRuntime;

PluginRuntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PluginRuntime.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PluginRuntime resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PluginRuntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PluginRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PluginRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParentInput">cgroupParentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanosInput">cpuNanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytesInput">memoryBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntimeInput">ociRuntimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootlessInput">rootlessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParent">cgroupParent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanos">cpuNanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytes">memoryBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntime">ociRuntime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootless">rootless</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `cgroupParentInput`<sup>Optional</sup> <a name="cgroupParentInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParentInput"></a>

```java
public java.lang.String getCgroupParentInput();
```

- *Type:* java.lang.String

---

##### `cpuNanosInput`<sup>Optional</sup> <a name="cpuNanosInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanosInput"></a>

```java
public java.lang.Number getCpuNanosInput();
```

- *Type:* java.lang.Number

---

##### `memoryBytesInput`<sup>Optional</sup> <a name="memoryBytesInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytesInput"></a>

```java
public java.lang.Number getMemoryBytesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `ociRuntimeInput`<sup>Optional</sup> <a name="ociRuntimeInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntimeInput"></a>

```java
public java.lang.String getOciRuntimeInput();
```

- *Type:* java.lang.String

---

##### `rootlessInput`<sup>Optional</sup> <a name="rootlessInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootlessInput"></a>

```java
public java.lang.Boolean|IResolvable getRootlessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `cgroupParent`<sup>Required</sup> <a name="cgroupParent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParent"></a>

```java
public java.lang.String getCgroupParent();
```

- *Type:* java.lang.String

---

##### `cpuNanos`<sup>Required</sup> <a name="cpuNanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanos"></a>

```java
public java.lang.Number getCpuNanos();
```

- *Type:* java.lang.Number

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytes"></a>

```java
public java.lang.Number getMemoryBytes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `ociRuntime`<sup>Required</sup> <a name="ociRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntime"></a>

```java
public java.lang.String getOciRuntime();
```

- *Type:* java.lang.String

---

##### `rootless`<sup>Required</sup> <a name="rootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootless"></a>

```java
public java.lang.Boolean|IResolvable getRootless();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PluginRuntimeConfig <a name="PluginRuntimeConfig" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.plugin_runtime.PluginRuntimeConfig;

PluginRuntimeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .cgroupParent(java.lang.String)
//  .cpuNanos(java.lang.Number)
//  .memoryBytes(java.lang.Number)
//  .namespace(java.lang.String)
//  .ociRuntime(java.lang.String)
//  .rootless(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the plugin runtime. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.type">type</a></code> | <code>java.lang.String</code> | Specifies the plugin runtime type. Currently only `container` is supported. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cgroupParent">cgroupParent</a></code> | <code>java.lang.String</code> | Specifies the parent cgroup to set for each container. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cpuNanos">cpuNanos</a></code> | <code>java.lang.Number</code> | Specifies CPU limit to set per container in billionths of a CPU. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.memoryBytes">memoryBytes</a></code> | <code>java.lang.Number</code> | Specifies memory limit to set per container in bytes. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.ociRuntime">ociRuntime</a></code> | <code>java.lang.String</code> | Specifies OCI-compliant container runtime to use. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.rootless">rootless</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the container runtime is running as a non-privileged user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the plugin runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#name PluginRuntime#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies the plugin runtime type. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#type PluginRuntime#type}

---

##### `cgroupParent`<sup>Optional</sup> <a name="cgroupParent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cgroupParent"></a>

```java
public java.lang.String getCgroupParent();
```

- *Type:* java.lang.String

Specifies the parent cgroup to set for each container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#cgroup_parent PluginRuntime#cgroup_parent}

---

##### `cpuNanos`<sup>Optional</sup> <a name="cpuNanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cpuNanos"></a>

```java
public java.lang.Number getCpuNanos();
```

- *Type:* java.lang.Number

Specifies CPU limit to set per container in billionths of a CPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#cpu_nanos PluginRuntime#cpu_nanos}

---

##### `memoryBytes`<sup>Optional</sup> <a name="memoryBytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.memoryBytes"></a>

```java
public java.lang.Number getMemoryBytes();
```

- *Type:* java.lang.Number

Specifies memory limit to set per container in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#memory_bytes PluginRuntime#memory_bytes}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#namespace PluginRuntime#namespace}

---

##### `ociRuntime`<sup>Optional</sup> <a name="ociRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.ociRuntime"></a>

```java
public java.lang.String getOciRuntime();
```

- *Type:* java.lang.String

Specifies OCI-compliant container runtime to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#oci_runtime PluginRuntime#oci_runtime}

---

##### `rootless`<sup>Optional</sup> <a name="rootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.rootless"></a>

```java
public java.lang.Boolean|IResolvable getRootless();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the container runtime is running as a non-privileged user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#rootless PluginRuntime#rootless}

---



