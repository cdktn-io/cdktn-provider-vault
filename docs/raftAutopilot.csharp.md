# `raftAutopilot` Submodule <a name="`raftAutopilot` Submodule" id="@cdktn/provider-vault.raftAutopilot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RaftAutopilot <a name="RaftAutopilot" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot vault_raft_autopilot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new RaftAutopilot(Construct Scope, string Id, RaftAutopilotConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig">RaftAutopilotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig">RaftAutopilotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetCleanupDeadServers">ResetCleanupDeadServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetDeadServerLastContactThreshold">ResetDeadServerLastContactThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetDisableUpgradeMigration">ResetDisableUpgradeMigration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetLastContactThreshold">ResetLastContactThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetMaxTrailingLogs">ResetMaxTrailingLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetMinQuorum">ResetMinQuorum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetServerStabilizationTime">ResetServerStabilizationTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCleanupDeadServers` <a name="ResetCleanupDeadServers" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetCleanupDeadServers"></a>

```csharp
private void ResetCleanupDeadServers()
```

##### `ResetDeadServerLastContactThreshold` <a name="ResetDeadServerLastContactThreshold" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetDeadServerLastContactThreshold"></a>

```csharp
private void ResetDeadServerLastContactThreshold()
```

##### `ResetDisableUpgradeMigration` <a name="ResetDisableUpgradeMigration" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetDisableUpgradeMigration"></a>

```csharp
private void ResetDisableUpgradeMigration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLastContactThreshold` <a name="ResetLastContactThreshold" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetLastContactThreshold"></a>

```csharp
private void ResetLastContactThreshold()
```

##### `ResetMaxTrailingLogs` <a name="ResetMaxTrailingLogs" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetMaxTrailingLogs"></a>

```csharp
private void ResetMaxTrailingLogs()
```

##### `ResetMinQuorum` <a name="ResetMinQuorum" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetMinQuorum"></a>

```csharp
private void ResetMinQuorum()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetServerStabilizationTime` <a name="ResetServerStabilizationTime" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.resetServerStabilizationTime"></a>

```csharp
private void ResetServerStabilizationTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RaftAutopilot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RaftAutopilot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RaftAutopilot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RaftAutopilot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RaftAutopilot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RaftAutopilot resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RaftAutopilot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RaftAutopilot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RaftAutopilot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServersInput">CleanupDeadServersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThresholdInput">DeadServerLastContactThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigrationInput">DisableUpgradeMigrationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThresholdInput">LastContactThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogsInput">MaxTrailingLogsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorumInput">MinQuorumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTimeInput">ServerStabilizationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServers">CleanupDeadServers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThreshold">DeadServerLastContactThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigration">DisableUpgradeMigration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThreshold">LastContactThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogs">MaxTrailingLogs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorum">MinQuorum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTime">ServerStabilizationTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CleanupDeadServersInput`<sup>Optional</sup> <a name="CleanupDeadServersInput" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServersInput"></a>

```csharp
public bool|IResolvable CleanupDeadServersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeadServerLastContactThresholdInput`<sup>Optional</sup> <a name="DeadServerLastContactThresholdInput" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThresholdInput"></a>

```csharp
public string DeadServerLastContactThresholdInput { get; }
```

- *Type:* string

---

##### `DisableUpgradeMigrationInput`<sup>Optional</sup> <a name="DisableUpgradeMigrationInput" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigrationInput"></a>

```csharp
public bool|IResolvable DisableUpgradeMigrationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LastContactThresholdInput`<sup>Optional</sup> <a name="LastContactThresholdInput" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThresholdInput"></a>

```csharp
public string LastContactThresholdInput { get; }
```

- *Type:* string

---

##### `MaxTrailingLogsInput`<sup>Optional</sup> <a name="MaxTrailingLogsInput" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogsInput"></a>

```csharp
public double MaxTrailingLogsInput { get; }
```

- *Type:* double

---

##### `MinQuorumInput`<sup>Optional</sup> <a name="MinQuorumInput" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorumInput"></a>

```csharp
public double MinQuorumInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ServerStabilizationTimeInput`<sup>Optional</sup> <a name="ServerStabilizationTimeInput" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTimeInput"></a>

```csharp
public string ServerStabilizationTimeInput { get; }
```

- *Type:* string

---

##### `CleanupDeadServers`<sup>Required</sup> <a name="CleanupDeadServers" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.cleanupDeadServers"></a>

```csharp
public bool|IResolvable CleanupDeadServers { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeadServerLastContactThreshold`<sup>Required</sup> <a name="DeadServerLastContactThreshold" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.deadServerLastContactThreshold"></a>

```csharp
public string DeadServerLastContactThreshold { get; }
```

- *Type:* string

---

##### `DisableUpgradeMigration`<sup>Required</sup> <a name="DisableUpgradeMigration" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.disableUpgradeMigration"></a>

```csharp
public bool|IResolvable DisableUpgradeMigration { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastContactThreshold`<sup>Required</sup> <a name="LastContactThreshold" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.lastContactThreshold"></a>

```csharp
public string LastContactThreshold { get; }
```

- *Type:* string

---

##### `MaxTrailingLogs`<sup>Required</sup> <a name="MaxTrailingLogs" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.maxTrailingLogs"></a>

```csharp
public double MaxTrailingLogs { get; }
```

- *Type:* double

---

##### `MinQuorum`<sup>Required</sup> <a name="MinQuorum" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.minQuorum"></a>

```csharp
public double MinQuorum { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ServerStabilizationTime`<sup>Required</sup> <a name="ServerStabilizationTime" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.serverStabilizationTime"></a>

```csharp
public string ServerStabilizationTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RaftAutopilotConfig <a name="RaftAutopilotConfig" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new RaftAutopilotConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable CleanupDeadServers = null,
    string DeadServerLastContactThreshold = null,
    bool|IResolvable DisableUpgradeMigration = null,
    string Id = null,
    string LastContactThreshold = null,
    double MaxTrailingLogs = null,
    double MinQuorum = null,
    string Namespace = null,
    string ServerStabilizationTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.cleanupDeadServers">CleanupDeadServers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to remove dead server nodes periodically or when a new server joins. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.deadServerLastContactThreshold">DeadServerLastContactThreshold</a></code> | <code>string</code> | Limit the amount of time a server can go without leader contact before being considered failed. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.disableUpgradeMigration">DisableUpgradeMigration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disables automatically upgrading Vault using autopilot. (Enterprise-only). |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot#id RaftAutopilot#id}. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lastContactThreshold">LastContactThreshold</a></code> | <code>string</code> | Limit the amount of time a server can go without leader contact before being considered unhealthy. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.maxTrailingLogs">MaxTrailingLogs</a></code> | <code>double</code> | Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.minQuorum">MinQuorum</a></code> | <code>double</code> | Minimum number of servers allowed in a cluster before autopilot can prune dead servers. |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.serverStabilizationTime">ServerStabilizationTime</a></code> | <code>string</code> | Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CleanupDeadServers`<sup>Optional</sup> <a name="CleanupDeadServers" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.cleanupDeadServers"></a>

```csharp
public bool|IResolvable CleanupDeadServers { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to remove dead server nodes periodically or when a new server joins.

This requires that min-quorum is also set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot#cleanup_dead_servers RaftAutopilot#cleanup_dead_servers}

---

##### `DeadServerLastContactThreshold`<sup>Optional</sup> <a name="DeadServerLastContactThreshold" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.deadServerLastContactThreshold"></a>

```csharp
public string DeadServerLastContactThreshold { get; set; }
```

- *Type:* string

Limit the amount of time a server can go without leader contact before being considered failed.

This only takes effect when cleanup_dead_servers is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot#dead_server_last_contact_threshold RaftAutopilot#dead_server_last_contact_threshold}

---

##### `DisableUpgradeMigration`<sup>Optional</sup> <a name="DisableUpgradeMigration" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.disableUpgradeMigration"></a>

```csharp
public bool|IResolvable DisableUpgradeMigration { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disables automatically upgrading Vault using autopilot. (Enterprise-only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot#disable_upgrade_migration RaftAutopilot#disable_upgrade_migration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot#id RaftAutopilot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastContactThreshold`<sup>Optional</sup> <a name="LastContactThreshold" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.lastContactThreshold"></a>

```csharp
public string LastContactThreshold { get; set; }
```

- *Type:* string

Limit the amount of time a server can go without leader contact before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot#last_contact_threshold RaftAutopilot#last_contact_threshold}

---

##### `MaxTrailingLogs`<sup>Optional</sup> <a name="MaxTrailingLogs" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.maxTrailingLogs"></a>

```csharp
public double MaxTrailingLogs { get; set; }
```

- *Type:* double

Maximum number of log entries in the Raft log that a server can be behind its leader before being considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot#max_trailing_logs RaftAutopilot#max_trailing_logs}

---

##### `MinQuorum`<sup>Optional</sup> <a name="MinQuorum" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.minQuorum"></a>

```csharp
public double MinQuorum { get; set; }
```

- *Type:* double

Minimum number of servers allowed in a cluster before autopilot can prune dead servers.

This should at least be 3. Applicable only for voting nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot#min_quorum RaftAutopilot#min_quorum}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot#namespace RaftAutopilot#namespace}

---

##### `ServerStabilizationTime`<sup>Optional</sup> <a name="ServerStabilizationTime" id="@cdktn/provider-vault.raftAutopilot.RaftAutopilotConfig.property.serverStabilizationTime"></a>

```csharp
public string ServerStabilizationTime { get; set; }
```

- *Type:* string

Minimum amount of time a server must be stable in the 'healthy' state before being added to the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/raft_autopilot#server_stabilization_time RaftAutopilot#server_stabilization_time}

---



