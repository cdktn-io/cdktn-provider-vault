# `raftSnapshotAgentConfig` Submodule <a name="`raftSnapshotAgentConfig` Submodule" id="@cdktn/provider-vault.raftSnapshotAgentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RaftSnapshotAgentConfig <a name="RaftSnapshotAgentConfig" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config vault_raft_snapshot_agent_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new RaftSnapshotAgentConfig(Construct Scope, string Id, RaftSnapshotAgentConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig">RaftSnapshotAgentConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig">RaftSnapshotAgentConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAutoloadEnabled">ResetAutoloadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsAccessKeyId">ResetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Bucket">ResetAwsS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3DisableTls">ResetAwsS3DisableTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3EnableKms">ResetAwsS3EnableKms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Endpoint">ResetAwsS3Endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ForcePathStyle">ResetAwsS3ForcePathStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3KmsKey">ResetAwsS3KmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Region">ResetAwsS3Region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ServerSideEncryption">ResetAwsS3ServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSecretAccessKey">ResetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSecretAccessKeyWo">ResetAwsSecretAccessKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSessionToken">ResetAwsSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountKey">ResetAzureAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountName">ResetAzureAccountName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAuthMode">ResetAzureAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureBlobEnvironment">ResetAzureBlobEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureClientId">ResetAzureClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureContainerName">ResetAzureContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureEndpoint">ResetAzureEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetFilePrefix">ResetFilePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleDisableTls">ResetGoogleDisableTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleEndpoint">ResetGoogleEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleGcsBucket">ResetGoogleGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleServiceAccountKey">ResetGoogleServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetLocalMaxSpace">ResetLocalMaxSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetRetain">ResetRetain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetSecretsWoVersion">ResetSecretsWoVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoloadEnabled` <a name="ResetAutoloadEnabled" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAutoloadEnabled"></a>

```csharp
private void ResetAutoloadEnabled()
```

##### `ResetAwsAccessKeyId` <a name="ResetAwsAccessKeyId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsAccessKeyId"></a>

```csharp
private void ResetAwsAccessKeyId()
```

##### `ResetAwsS3Bucket` <a name="ResetAwsS3Bucket" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Bucket"></a>

```csharp
private void ResetAwsS3Bucket()
```

##### `ResetAwsS3DisableTls` <a name="ResetAwsS3DisableTls" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3DisableTls"></a>

```csharp
private void ResetAwsS3DisableTls()
```

##### `ResetAwsS3EnableKms` <a name="ResetAwsS3EnableKms" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3EnableKms"></a>

```csharp
private void ResetAwsS3EnableKms()
```

##### `ResetAwsS3Endpoint` <a name="ResetAwsS3Endpoint" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Endpoint"></a>

```csharp
private void ResetAwsS3Endpoint()
```

##### `ResetAwsS3ForcePathStyle` <a name="ResetAwsS3ForcePathStyle" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ForcePathStyle"></a>

```csharp
private void ResetAwsS3ForcePathStyle()
```

##### `ResetAwsS3KmsKey` <a name="ResetAwsS3KmsKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3KmsKey"></a>

```csharp
private void ResetAwsS3KmsKey()
```

##### `ResetAwsS3Region` <a name="ResetAwsS3Region" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3Region"></a>

```csharp
private void ResetAwsS3Region()
```

##### `ResetAwsS3ServerSideEncryption` <a name="ResetAwsS3ServerSideEncryption" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsS3ServerSideEncryption"></a>

```csharp
private void ResetAwsS3ServerSideEncryption()
```

##### `ResetAwsSecretAccessKey` <a name="ResetAwsSecretAccessKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSecretAccessKey"></a>

```csharp
private void ResetAwsSecretAccessKey()
```

##### `ResetAwsSecretAccessKeyWo` <a name="ResetAwsSecretAccessKeyWo" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSecretAccessKeyWo"></a>

```csharp
private void ResetAwsSecretAccessKeyWo()
```

##### `ResetAwsSessionToken` <a name="ResetAwsSessionToken" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAwsSessionToken"></a>

```csharp
private void ResetAwsSessionToken()
```

##### `ResetAzureAccountKey` <a name="ResetAzureAccountKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountKey"></a>

```csharp
private void ResetAzureAccountKey()
```

##### `ResetAzureAccountName` <a name="ResetAzureAccountName" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAccountName"></a>

```csharp
private void ResetAzureAccountName()
```

##### `ResetAzureAuthMode` <a name="ResetAzureAuthMode" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureAuthMode"></a>

```csharp
private void ResetAzureAuthMode()
```

##### `ResetAzureBlobEnvironment` <a name="ResetAzureBlobEnvironment" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureBlobEnvironment"></a>

```csharp
private void ResetAzureBlobEnvironment()
```

##### `ResetAzureClientId` <a name="ResetAzureClientId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureClientId"></a>

```csharp
private void ResetAzureClientId()
```

##### `ResetAzureContainerName` <a name="ResetAzureContainerName" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureContainerName"></a>

```csharp
private void ResetAzureContainerName()
```

##### `ResetAzureEndpoint` <a name="ResetAzureEndpoint" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetAzureEndpoint"></a>

```csharp
private void ResetAzureEndpoint()
```

##### `ResetFilePrefix` <a name="ResetFilePrefix" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetFilePrefix"></a>

```csharp
private void ResetFilePrefix()
```

##### `ResetGoogleDisableTls` <a name="ResetGoogleDisableTls" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleDisableTls"></a>

```csharp
private void ResetGoogleDisableTls()
```

##### `ResetGoogleEndpoint` <a name="ResetGoogleEndpoint" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleEndpoint"></a>

```csharp
private void ResetGoogleEndpoint()
```

##### `ResetGoogleGcsBucket` <a name="ResetGoogleGcsBucket" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleGcsBucket"></a>

```csharp
private void ResetGoogleGcsBucket()
```

##### `ResetGoogleServiceAccountKey` <a name="ResetGoogleServiceAccountKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetGoogleServiceAccountKey"></a>

```csharp
private void ResetGoogleServiceAccountKey()
```

##### `ResetLocalMaxSpace` <a name="ResetLocalMaxSpace" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetLocalMaxSpace"></a>

```csharp
private void ResetLocalMaxSpace()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRetain` <a name="ResetRetain" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetRetain"></a>

```csharp
private void ResetRetain()
```

##### `ResetSecretsWoVersion` <a name="ResetSecretsWoVersion" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.resetSecretsWoVersion"></a>

```csharp
private void ResetSecretsWoVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RaftSnapshotAgentConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RaftSnapshotAgentConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RaftSnapshotAgentConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RaftSnapshotAgentConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

RaftSnapshotAgentConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RaftSnapshotAgentConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RaftSnapshotAgentConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RaftSnapshotAgentConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RaftSnapshotAgentConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.autoloadEnabledInput">AutoloadEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyIdInput">AwsAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3BucketInput">AwsS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTlsInput">AwsS3DisableTlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKmsInput">AwsS3EnableKmsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EndpointInput">AwsS3EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyleInput">AwsS3ForcePathStyleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKeyInput">AwsS3KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3RegionInput">AwsS3RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryptionInput">AwsS3ServerSideEncryptionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyInput">AwsSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyWoInput">AwsSecretAccessKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionTokenInput">AwsSessionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKeyInput">AzureAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountNameInput">AzureAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAuthModeInput">AzureAuthModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironmentInput">AzureBlobEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureClientIdInput">AzureClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerNameInput">AzureContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpointInput">AzureEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefixInput">FilePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTlsInput">GoogleDisableTlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpointInput">GoogleEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucketInput">GoogleGcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKeyInput">GoogleServiceAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpaceInput">LocalMaxSpaceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefixInput">PathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retainInput">RetainInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.secretsWoVersionInput">SecretsWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.autoloadEnabled">AutoloadEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Bucket">AwsS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTls">AwsS3DisableTls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKms">AwsS3EnableKms</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Endpoint">AwsS3Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyle">AwsS3ForcePathStyle</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKey">AwsS3KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Region">AwsS3Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryption">AwsS3ServerSideEncryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyWo">AwsSecretAccessKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionToken">AwsSessionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKey">AzureAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountName">AzureAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAuthMode">AzureAuthMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironment">AzureBlobEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureClientId">AzureClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerName">AzureContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpoint">AzureEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefix">FilePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTls">GoogleDisableTls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpoint">GoogleEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucket">GoogleGcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKey">GoogleServiceAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpace">LocalMaxSpace</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefix">PathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retain">Retain</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.secretsWoVersion">SecretsWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AutoloadEnabledInput`<sup>Optional</sup> <a name="AutoloadEnabledInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.autoloadEnabledInput"></a>

```csharp
public bool|IResolvable AutoloadEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsAccessKeyIdInput`<sup>Optional</sup> <a name="AwsAccessKeyIdInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyIdInput"></a>

```csharp
public string AwsAccessKeyIdInput { get; }
```

- *Type:* string

---

##### `AwsS3BucketInput`<sup>Optional</sup> <a name="AwsS3BucketInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3BucketInput"></a>

```csharp
public string AwsS3BucketInput { get; }
```

- *Type:* string

---

##### `AwsS3DisableTlsInput`<sup>Optional</sup> <a name="AwsS3DisableTlsInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTlsInput"></a>

```csharp
public bool|IResolvable AwsS3DisableTlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsS3EnableKmsInput`<sup>Optional</sup> <a name="AwsS3EnableKmsInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKmsInput"></a>

```csharp
public bool|IResolvable AwsS3EnableKmsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsS3EndpointInput`<sup>Optional</sup> <a name="AwsS3EndpointInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EndpointInput"></a>

```csharp
public string AwsS3EndpointInput { get; }
```

- *Type:* string

---

##### `AwsS3ForcePathStyleInput`<sup>Optional</sup> <a name="AwsS3ForcePathStyleInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyleInput"></a>

```csharp
public bool|IResolvable AwsS3ForcePathStyleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsS3KmsKeyInput`<sup>Optional</sup> <a name="AwsS3KmsKeyInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKeyInput"></a>

```csharp
public string AwsS3KmsKeyInput { get; }
```

- *Type:* string

---

##### `AwsS3RegionInput`<sup>Optional</sup> <a name="AwsS3RegionInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3RegionInput"></a>

```csharp
public string AwsS3RegionInput { get; }
```

- *Type:* string

---

##### `AwsS3ServerSideEncryptionInput`<sup>Optional</sup> <a name="AwsS3ServerSideEncryptionInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryptionInput"></a>

```csharp
public bool|IResolvable AwsS3ServerSideEncryptionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsSecretAccessKeyInput`<sup>Optional</sup> <a name="AwsSecretAccessKeyInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyInput"></a>

```csharp
public string AwsSecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AwsSecretAccessKeyWoInput`<sup>Optional</sup> <a name="AwsSecretAccessKeyWoInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyWoInput"></a>

```csharp
public string AwsSecretAccessKeyWoInput { get; }
```

- *Type:* string

---

##### `AwsSessionTokenInput`<sup>Optional</sup> <a name="AwsSessionTokenInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionTokenInput"></a>

```csharp
public string AwsSessionTokenInput { get; }
```

- *Type:* string

---

##### `AzureAccountKeyInput`<sup>Optional</sup> <a name="AzureAccountKeyInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKeyInput"></a>

```csharp
public string AzureAccountKeyInput { get; }
```

- *Type:* string

---

##### `AzureAccountNameInput`<sup>Optional</sup> <a name="AzureAccountNameInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountNameInput"></a>

```csharp
public string AzureAccountNameInput { get; }
```

- *Type:* string

---

##### `AzureAuthModeInput`<sup>Optional</sup> <a name="AzureAuthModeInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAuthModeInput"></a>

```csharp
public string AzureAuthModeInput { get; }
```

- *Type:* string

---

##### `AzureBlobEnvironmentInput`<sup>Optional</sup> <a name="AzureBlobEnvironmentInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironmentInput"></a>

```csharp
public string AzureBlobEnvironmentInput { get; }
```

- *Type:* string

---

##### `AzureClientIdInput`<sup>Optional</sup> <a name="AzureClientIdInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureClientIdInput"></a>

```csharp
public string AzureClientIdInput { get; }
```

- *Type:* string

---

##### `AzureContainerNameInput`<sup>Optional</sup> <a name="AzureContainerNameInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerNameInput"></a>

```csharp
public string AzureContainerNameInput { get; }
```

- *Type:* string

---

##### `AzureEndpointInput`<sup>Optional</sup> <a name="AzureEndpointInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpointInput"></a>

```csharp
public string AzureEndpointInput { get; }
```

- *Type:* string

---

##### `FilePrefixInput`<sup>Optional</sup> <a name="FilePrefixInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefixInput"></a>

```csharp
public string FilePrefixInput { get; }
```

- *Type:* string

---

##### `GoogleDisableTlsInput`<sup>Optional</sup> <a name="GoogleDisableTlsInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTlsInput"></a>

```csharp
public bool|IResolvable GoogleDisableTlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GoogleEndpointInput`<sup>Optional</sup> <a name="GoogleEndpointInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpointInput"></a>

```csharp
public string GoogleEndpointInput { get; }
```

- *Type:* string

---

##### `GoogleGcsBucketInput`<sup>Optional</sup> <a name="GoogleGcsBucketInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucketInput"></a>

```csharp
public string GoogleGcsBucketInput { get; }
```

- *Type:* string

---

##### `GoogleServiceAccountKeyInput`<sup>Optional</sup> <a name="GoogleServiceAccountKeyInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKeyInput"></a>

```csharp
public string GoogleServiceAccountKeyInput { get; }
```

- *Type:* string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `LocalMaxSpaceInput`<sup>Optional</sup> <a name="LocalMaxSpaceInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpaceInput"></a>

```csharp
public double LocalMaxSpaceInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathPrefixInput`<sup>Optional</sup> <a name="PathPrefixInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefixInput"></a>

```csharp
public string PathPrefixInput { get; }
```

- *Type:* string

---

##### `RetainInput`<sup>Optional</sup> <a name="RetainInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retainInput"></a>

```csharp
public double RetainInput { get; }
```

- *Type:* double

---

##### `SecretsWoVersionInput`<sup>Optional</sup> <a name="SecretsWoVersionInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.secretsWoVersionInput"></a>

```csharp
public double SecretsWoVersionInput { get; }
```

- *Type:* double

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `AutoloadEnabled`<sup>Required</sup> <a name="AutoloadEnabled" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.autoloadEnabled"></a>

```csharp
public bool|IResolvable AutoloadEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsAccessKeyId`<sup>Required</sup> <a name="AwsAccessKeyId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsAccessKeyId"></a>

```csharp
public string AwsAccessKeyId { get; }
```

- *Type:* string

---

##### `AwsS3Bucket`<sup>Required</sup> <a name="AwsS3Bucket" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Bucket"></a>

```csharp
public string AwsS3Bucket { get; }
```

- *Type:* string

---

##### `AwsS3DisableTls`<sup>Required</sup> <a name="AwsS3DisableTls" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3DisableTls"></a>

```csharp
public bool|IResolvable AwsS3DisableTls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsS3EnableKms`<sup>Required</sup> <a name="AwsS3EnableKms" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3EnableKms"></a>

```csharp
public bool|IResolvable AwsS3EnableKms { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsS3Endpoint`<sup>Required</sup> <a name="AwsS3Endpoint" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Endpoint"></a>

```csharp
public string AwsS3Endpoint { get; }
```

- *Type:* string

---

##### `AwsS3ForcePathStyle`<sup>Required</sup> <a name="AwsS3ForcePathStyle" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ForcePathStyle"></a>

```csharp
public bool|IResolvable AwsS3ForcePathStyle { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsS3KmsKey`<sup>Required</sup> <a name="AwsS3KmsKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3KmsKey"></a>

```csharp
public string AwsS3KmsKey { get; }
```

- *Type:* string

---

##### `AwsS3Region`<sup>Required</sup> <a name="AwsS3Region" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3Region"></a>

```csharp
public string AwsS3Region { get; }
```

- *Type:* string

---

##### `AwsS3ServerSideEncryption`<sup>Required</sup> <a name="AwsS3ServerSideEncryption" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsS3ServerSideEncryption"></a>

```csharp
public bool|IResolvable AwsS3ServerSideEncryption { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsSecretAccessKey`<sup>Required</sup> <a name="AwsSecretAccessKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKey"></a>

```csharp
public string AwsSecretAccessKey { get; }
```

- *Type:* string

---

##### `AwsSecretAccessKeyWo`<sup>Required</sup> <a name="AwsSecretAccessKeyWo" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSecretAccessKeyWo"></a>

```csharp
public string AwsSecretAccessKeyWo { get; }
```

- *Type:* string

---

##### `AwsSessionToken`<sup>Required</sup> <a name="AwsSessionToken" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.awsSessionToken"></a>

```csharp
public string AwsSessionToken { get; }
```

- *Type:* string

---

##### `AzureAccountKey`<sup>Required</sup> <a name="AzureAccountKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountKey"></a>

```csharp
public string AzureAccountKey { get; }
```

- *Type:* string

---

##### `AzureAccountName`<sup>Required</sup> <a name="AzureAccountName" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAccountName"></a>

```csharp
public string AzureAccountName { get; }
```

- *Type:* string

---

##### `AzureAuthMode`<sup>Required</sup> <a name="AzureAuthMode" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureAuthMode"></a>

```csharp
public string AzureAuthMode { get; }
```

- *Type:* string

---

##### `AzureBlobEnvironment`<sup>Required</sup> <a name="AzureBlobEnvironment" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureBlobEnvironment"></a>

```csharp
public string AzureBlobEnvironment { get; }
```

- *Type:* string

---

##### `AzureClientId`<sup>Required</sup> <a name="AzureClientId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureClientId"></a>

```csharp
public string AzureClientId { get; }
```

- *Type:* string

---

##### `AzureContainerName`<sup>Required</sup> <a name="AzureContainerName" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureContainerName"></a>

```csharp
public string AzureContainerName { get; }
```

- *Type:* string

---

##### `AzureEndpoint`<sup>Required</sup> <a name="AzureEndpoint" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.azureEndpoint"></a>

```csharp
public string AzureEndpoint { get; }
```

- *Type:* string

---

##### `FilePrefix`<sup>Required</sup> <a name="FilePrefix" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.filePrefix"></a>

```csharp
public string FilePrefix { get; }
```

- *Type:* string

---

##### `GoogleDisableTls`<sup>Required</sup> <a name="GoogleDisableTls" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleDisableTls"></a>

```csharp
public bool|IResolvable GoogleDisableTls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GoogleEndpoint`<sup>Required</sup> <a name="GoogleEndpoint" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleEndpoint"></a>

```csharp
public string GoogleEndpoint { get; }
```

- *Type:* string

---

##### `GoogleGcsBucket`<sup>Required</sup> <a name="GoogleGcsBucket" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleGcsBucket"></a>

```csharp
public string GoogleGcsBucket { get; }
```

- *Type:* string

---

##### `GoogleServiceAccountKey`<sup>Required</sup> <a name="GoogleServiceAccountKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.googleServiceAccountKey"></a>

```csharp
public string GoogleServiceAccountKey { get; }
```

- *Type:* string

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `LocalMaxSpace`<sup>Required</sup> <a name="LocalMaxSpace" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.localMaxSpace"></a>

```csharp
public double LocalMaxSpace { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.pathPrefix"></a>

```csharp
public string PathPrefix { get; }
```

- *Type:* string

---

##### `Retain`<sup>Required</sup> <a name="Retain" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.retain"></a>

```csharp
public double Retain { get; }
```

- *Type:* double

---

##### `SecretsWoVersion`<sup>Required</sup> <a name="SecretsWoVersion" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.secretsWoVersion"></a>

```csharp
public double SecretsWoVersion { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RaftSnapshotAgentConfigConfig <a name="RaftSnapshotAgentConfigConfig" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new RaftSnapshotAgentConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double IntervalSeconds,
    string Name,
    string PathPrefix,
    string StorageType,
    bool|IResolvable AutoloadEnabled = null,
    string AwsAccessKeyId = null,
    string AwsS3Bucket = null,
    bool|IResolvable AwsS3DisableTls = null,
    bool|IResolvable AwsS3EnableKms = null,
    string AwsS3Endpoint = null,
    bool|IResolvable AwsS3ForcePathStyle = null,
    string AwsS3KmsKey = null,
    string AwsS3Region = null,
    bool|IResolvable AwsS3ServerSideEncryption = null,
    string AwsSecretAccessKey = null,
    string AwsSecretAccessKeyWo = null,
    string AwsSessionToken = null,
    string AzureAccountKey = null,
    string AzureAccountName = null,
    string AzureAuthMode = null,
    string AzureBlobEnvironment = null,
    string AzureClientId = null,
    string AzureContainerName = null,
    string AzureEndpoint = null,
    string FilePrefix = null,
    bool|IResolvable GoogleDisableTls = null,
    string GoogleEndpoint = null,
    string GoogleGcsBucket = null,
    string GoogleServiceAccountKey = null,
    double LocalMaxSpace = null,
    string Namespace = null,
    double Retain = null,
    double SecretsWoVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | Number of seconds between snapshots. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.name">Name</a></code> | <code>string</code> | Name of the snapshot agent configuration. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.pathPrefix">PathPrefix</a></code> | <code>string</code> | The directory or bucket prefix to use. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.storageType">StorageType</a></code> | <code>string</code> | What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs". |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.autoloadEnabled">AutoloadEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Have Vault automatically load the latest snapshot after it is written. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>string</code> | AWS access key ID. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Bucket">AwsS3Bucket</a></code> | <code>string</code> | S3 bucket to write snapshots to. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3DisableTls">AwsS3DisableTls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable TLS for the S3 endpoint. This should only be used for testing purposes. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3EnableKms">AwsS3EnableKms</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use KMS to encrypt bucket contents. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Endpoint">AwsS3Endpoint</a></code> | <code>string</code> | AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ForcePathStyle">AwsS3ForcePathStyle</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use the endpoint/bucket URL style instead of bucket.endpoint. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3KmsKey">AwsS3KmsKey</a></code> | <code>string</code> | Use named KMS key, when aws_s3_enable_kms=true. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Region">AwsS3Region</a></code> | <code>string</code> | AWS region bucket is in. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ServerSideEncryption">AwsS3ServerSideEncryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use AES256 to encrypt bucket contents. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>string</code> | AWS secret access key. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSecretAccessKeyWo">AwsSecretAccessKeyWo</a></code> | <code>string</code> | AWS secret access key. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSessionToken">AwsSessionToken</a></code> | <code>string</code> | AWS session token. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountKey">AzureAccountKey</a></code> | <code>string</code> | Azure account key. Required when azure_auth_mode is 'shared'. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountName">AzureAccountName</a></code> | <code>string</code> | Azure account name. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAuthMode">AzureAuthMode</a></code> | <code>string</code> | Azure authentication mode. Required for azure-blob storage. Possible values are 'shared', 'managed', or 'environment'. Requires Vault Enterprise 1.18.0+. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureBlobEnvironment">AzureBlobEnvironment</a></code> | <code>string</code> | Azure blob environment. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureClientId">AzureClientId</a></code> | <code>string</code> | Azure client ID for authentication. Required when azure_auth_mode is 'managed'. Requires Vault Enterprise 1.18.0+. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureContainerName">AzureContainerName</a></code> | <code>string</code> | Azure container name to write snapshots to. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureEndpoint">AzureEndpoint</a></code> | <code>string</code> | Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.filePrefix">FilePrefix</a></code> | <code>string</code> | The file or object name of snapshot files will start with this string. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleDisableTls">GoogleDisableTls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable TLS for the GCS endpoint. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleEndpoint">GoogleEndpoint</a></code> | <code>string</code> | GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleGcsBucket">GoogleGcsBucket</a></code> | <code>string</code> | GCS bucket to write snapshots to. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleServiceAccountKey">GoogleServiceAccountKey</a></code> | <code>string</code> | Google service account key in JSON format. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.localMaxSpace">LocalMaxSpace</a></code> | <code>double</code> | The maximum space, in bytes, to use for snapshots. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.retain">Retain</a></code> | <code>double</code> | How many snapshots are to be kept. |
| <code><a href="#@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.secretsWoVersion">SecretsWoVersion</a></code> | <code>double</code> | Version number for write-only secret updates. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

Number of seconds between snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#interval_seconds RaftSnapshotAgentConfig#interval_seconds}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the snapshot agent configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#name RaftSnapshotAgentConfig#name}

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.pathPrefix"></a>

```csharp
public string PathPrefix { get; set; }
```

- *Type:* string

The directory or bucket prefix to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#path_prefix RaftSnapshotAgentConfig#path_prefix}

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

What storage service to send snapshots to. One of "local", "azure-blob", "aws-s3", or "google-gcs".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#storage_type RaftSnapshotAgentConfig#storage_type}

---

##### `AutoloadEnabled`<sup>Optional</sup> <a name="AutoloadEnabled" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.autoloadEnabled"></a>

```csharp
public bool|IResolvable AutoloadEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Have Vault automatically load the latest snapshot after it is written.

Note that this does not mean the snapshot is automatically applied to the cluster, it is just loaded and available for recovery operations. Requires Vault Enterprise 1.21.0+. Not supported with storage_type = "local".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#autoload_enabled RaftSnapshotAgentConfig#autoload_enabled}

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsAccessKeyId"></a>

```csharp
public string AwsAccessKeyId { get; set; }
```

- *Type:* string

AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_access_key_id RaftSnapshotAgentConfig#aws_access_key_id}

---

##### `AwsS3Bucket`<sup>Optional</sup> <a name="AwsS3Bucket" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Bucket"></a>

```csharp
public string AwsS3Bucket { get; set; }
```

- *Type:* string

S3 bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_s3_bucket RaftSnapshotAgentConfig#aws_s3_bucket}

---

##### `AwsS3DisableTls`<sup>Optional</sup> <a name="AwsS3DisableTls" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3DisableTls"></a>

```csharp
public bool|IResolvable AwsS3DisableTls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable TLS for the S3 endpoint. This should only be used for testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_s3_disable_tls RaftSnapshotAgentConfig#aws_s3_disable_tls}

---

##### `AwsS3EnableKms`<sup>Optional</sup> <a name="AwsS3EnableKms" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3EnableKms"></a>

```csharp
public bool|IResolvable AwsS3EnableKms { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use KMS to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_s3_enable_kms RaftSnapshotAgentConfig#aws_s3_enable_kms}

---

##### `AwsS3Endpoint`<sup>Optional</sup> <a name="AwsS3Endpoint" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Endpoint"></a>

```csharp
public string AwsS3Endpoint { get; set; }
```

- *Type:* string

AWS endpoint. This is typically only set when using a non-AWS S3 implementation like Minio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_s3_endpoint RaftSnapshotAgentConfig#aws_s3_endpoint}

---

##### `AwsS3ForcePathStyle`<sup>Optional</sup> <a name="AwsS3ForcePathStyle" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ForcePathStyle"></a>

```csharp
public bool|IResolvable AwsS3ForcePathStyle { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use the endpoint/bucket URL style instead of bucket.endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_s3_force_path_style RaftSnapshotAgentConfig#aws_s3_force_path_style}

---

##### `AwsS3KmsKey`<sup>Optional</sup> <a name="AwsS3KmsKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3KmsKey"></a>

```csharp
public string AwsS3KmsKey { get; set; }
```

- *Type:* string

Use named KMS key, when aws_s3_enable_kms=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_s3_kms_key RaftSnapshotAgentConfig#aws_s3_kms_key}

---

##### `AwsS3Region`<sup>Optional</sup> <a name="AwsS3Region" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3Region"></a>

```csharp
public string AwsS3Region { get; set; }
```

- *Type:* string

AWS region bucket is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_s3_region RaftSnapshotAgentConfig#aws_s3_region}

---

##### `AwsS3ServerSideEncryption`<sup>Optional</sup> <a name="AwsS3ServerSideEncryption" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsS3ServerSideEncryption"></a>

```csharp
public bool|IResolvable AwsS3ServerSideEncryption { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use AES256 to encrypt bucket contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_s3_server_side_encryption RaftSnapshotAgentConfig#aws_s3_server_side_encryption}

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSecretAccessKey"></a>

```csharp
public string AwsSecretAccessKey { get; set; }
```

- *Type:* string

AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_secret_access_key RaftSnapshotAgentConfig#aws_secret_access_key}

---

##### `AwsSecretAccessKeyWo`<sup>Optional</sup> <a name="AwsSecretAccessKeyWo" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSecretAccessKeyWo"></a>

```csharp
public string AwsSecretAccessKeyWo { get; set; }
```

- *Type:* string

AWS secret access key.

Write-only: never stored in state. If secrets_wo_version is not set, changes are automatically detected via a hash stored in private state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_secret_access_key_wo RaftSnapshotAgentConfig#aws_secret_access_key_wo}

---

##### `AwsSessionToken`<sup>Optional</sup> <a name="AwsSessionToken" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.awsSessionToken"></a>

```csharp
public string AwsSessionToken { get; set; }
```

- *Type:* string

AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#aws_session_token RaftSnapshotAgentConfig#aws_session_token}

---

##### `AzureAccountKey`<sup>Optional</sup> <a name="AzureAccountKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountKey"></a>

```csharp
public string AzureAccountKey { get; set; }
```

- *Type:* string

Azure account key. Required when azure_auth_mode is 'shared'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#azure_account_key RaftSnapshotAgentConfig#azure_account_key}

---

##### `AzureAccountName`<sup>Optional</sup> <a name="AzureAccountName" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAccountName"></a>

```csharp
public string AzureAccountName { get; set; }
```

- *Type:* string

Azure account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#azure_account_name RaftSnapshotAgentConfig#azure_account_name}

---

##### `AzureAuthMode`<sup>Optional</sup> <a name="AzureAuthMode" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureAuthMode"></a>

```csharp
public string AzureAuthMode { get; set; }
```

- *Type:* string

Azure authentication mode. Required for azure-blob storage. Possible values are 'shared', 'managed', or 'environment'. Requires Vault Enterprise 1.18.0+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#azure_auth_mode RaftSnapshotAgentConfig#azure_auth_mode}

---

##### `AzureBlobEnvironment`<sup>Optional</sup> <a name="AzureBlobEnvironment" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureBlobEnvironment"></a>

```csharp
public string AzureBlobEnvironment { get; set; }
```

- *Type:* string

Azure blob environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#azure_blob_environment RaftSnapshotAgentConfig#azure_blob_environment}

---

##### `AzureClientId`<sup>Optional</sup> <a name="AzureClientId" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureClientId"></a>

```csharp
public string AzureClientId { get; set; }
```

- *Type:* string

Azure client ID for authentication. Required when azure_auth_mode is 'managed'. Requires Vault Enterprise 1.18.0+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#azure_client_id RaftSnapshotAgentConfig#azure_client_id}

---

##### `AzureContainerName`<sup>Optional</sup> <a name="AzureContainerName" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureContainerName"></a>

```csharp
public string AzureContainerName { get; set; }
```

- *Type:* string

Azure container name to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#azure_container_name RaftSnapshotAgentConfig#azure_container_name}

---

##### `AzureEndpoint`<sup>Optional</sup> <a name="AzureEndpoint" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.azureEndpoint"></a>

```csharp
public string AzureEndpoint { get; set; }
```

- *Type:* string

Azure blob storage endpoint. This is typically only set when using a non-Azure implementation like Azurite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#azure_endpoint RaftSnapshotAgentConfig#azure_endpoint}

---

##### `FilePrefix`<sup>Optional</sup> <a name="FilePrefix" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.filePrefix"></a>

```csharp
public string FilePrefix { get; set; }
```

- *Type:* string

The file or object name of snapshot files will start with this string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#file_prefix RaftSnapshotAgentConfig#file_prefix}

---

##### `GoogleDisableTls`<sup>Optional</sup> <a name="GoogleDisableTls" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleDisableTls"></a>

```csharp
public bool|IResolvable GoogleDisableTls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable TLS for the GCS endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#google_disable_tls RaftSnapshotAgentConfig#google_disable_tls}

---

##### `GoogleEndpoint`<sup>Optional</sup> <a name="GoogleEndpoint" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleEndpoint"></a>

```csharp
public string GoogleEndpoint { get; set; }
```

- *Type:* string

GCS endpoint. This is typically only set when using a non-Google GCS implementation like fake-gcs-server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#google_endpoint RaftSnapshotAgentConfig#google_endpoint}

---

##### `GoogleGcsBucket`<sup>Optional</sup> <a name="GoogleGcsBucket" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleGcsBucket"></a>

```csharp
public string GoogleGcsBucket { get; set; }
```

- *Type:* string

GCS bucket to write snapshots to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#google_gcs_bucket RaftSnapshotAgentConfig#google_gcs_bucket}

---

##### `GoogleServiceAccountKey`<sup>Optional</sup> <a name="GoogleServiceAccountKey" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.googleServiceAccountKey"></a>

```csharp
public string GoogleServiceAccountKey { get; set; }
```

- *Type:* string

Google service account key in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#google_service_account_key RaftSnapshotAgentConfig#google_service_account_key}

---

##### `LocalMaxSpace`<sup>Optional</sup> <a name="LocalMaxSpace" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.localMaxSpace"></a>

```csharp
public double LocalMaxSpace { get; set; }
```

- *Type:* double

The maximum space, in bytes, to use for snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#local_max_space RaftSnapshotAgentConfig#local_max_space}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#namespace RaftSnapshotAgentConfig#namespace}

---

##### `Retain`<sup>Optional</sup> <a name="Retain" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.retain"></a>

```csharp
public double Retain { get; set; }
```

- *Type:* double

How many snapshots are to be kept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#retain RaftSnapshotAgentConfig#retain}

---

##### `SecretsWoVersion`<sup>Optional</sup> <a name="SecretsWoVersion" id="@cdktn/provider-vault.raftSnapshotAgentConfig.RaftSnapshotAgentConfigConfig.property.secretsWoVersion"></a>

```csharp
public double SecretsWoVersion { get; set; }
```

- *Type:* double

Version number for write-only secret updates.

If not set, the provider automatically detects changes to write-only secrets using a SHA-256 hash stored in private state. If set manually, you control when the secret is updated by incrementing this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/raft_snapshot_agent_config#secrets_wo_version RaftSnapshotAgentConfig#secrets_wo_version}

---



